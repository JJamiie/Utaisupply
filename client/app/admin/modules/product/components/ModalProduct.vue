<template lang="pug">
div
    .modal.is-active
        .modal-background
        .modal-card
            header.modal-card-head
                p.modal-card-title {{title}} Product
            section.modal-card-body
                tab-choose-language(:indexLanguage="indexLanguage" @select-language="selectLanguage")
                FieldProduct(v-for="(lang, index) in languages" v-bind:key="getUUID()" v-bind:initialProduct="translations[index]" v-bind:index="index" v-show="indexLanguage == index" v-on:update-value="updateValue")
                .underline
                form(data-vv-scope="product-scope")
                    .columns
                        .column.is-6
                            .field
                                label.label Category
                                    .control.is-expaned
                                        .select.is-fullwidth(v-bind:class="{'is-danger': errors.has('product-scope.category')}")
                                            select(name="category" v-model="categorySelected" v-validate="'required'")
                                                option(v-bind:value="''") Select category
                                                option(v-for='category in categories' v-bind:value="category._id") {{category.translations[0].name}}
                                            p.help.is-danger(v-show="errors.has('product-scope.category')") {{errors.first('product-scope.category')}}
                        .column.is-6
                            .field
                                label.label Status
                                    .control.is-expaned
                                        .select.is-fullwidth(v-bind:class="{'is-danger': errors.has('product-scope.status')}")
                                            select(name="status" v-model="statusSelected" v-validate="'required'")
                                                option(v-bind:value="''") Select status
                                                option(v-for='status in statuses' v-bind:value="status._id") {{status.translations[0].name}}
                                    p.help.is-danger(v-show="errors.has('product-scope.status')") {{errors.first('product-scope.status')}}
                    .field
                        label.label Inventor
                        AutoComplete(v-for="(inventorSelected,index) in inventorSelecteds"  v-bind:key="inventorSelected._id" @remove="inventorSelecteds.splice(index,1)" v-bind:options="inventors" @reload="loadInventor" v-model="inventorSelecteds[index]")
                        p.mar-bot-15.has-text-centered(v-if="inventorSelecteds.length === 0") No inventor has been added
                        .has-text-centered
                            a.button(@click="addInventor") 
                                span.icon
                                    i.fa.fa-plus
                                span Add
                    .field
                        label.label Image
                        input-file(v-for="(image,index) in images" v-bind:key="getUUID()" v-model="images[index]" v-bind:intialIsRemove="true" @remove="removeImage(index)" )
                        .has-text-centered
                            a.button(@click="addImage") 
                                span.icon
                                    i.fa.fa-plus
                                span Add
                    .field.mar-bot-15
                        .control
                            label.checkbox
                                input(type="checkbox" v-model="isSpecial") 
                                |  Show at first page
                .field.fieldDelete(v-if="mode === 1")
                    .columns
                        .column
                            .control
                                input.input( type="text" v-bind:class="{'is-danger': errors.has('delete')}" v-validate="'required|regex:delete'" name="delete" placeholder="Please fill delete before deleting")
                                p.help.is-danger(v-show="errors.has('delete')") {{errors.first('delete')}}
                        .column.is-narrow
                            a.button.is-danger.is-outlined(@click="deleteProduct")
                                span Delete
            footer.modal-card-foot
                button.button.is-success(@click="updateProduct" v-bind:class="{ 'is-loading': isLoading }") {{title}}
                button.button(@click="$emit('close')") Cancel
            
</template>

<script>
import uuidv1 from "uuid/v1";
import FieldProduct from "./FieldProduct";
import AutoComplete from "../../../core/components/AutoComplete"
export default {
    props: {
        mode: {
            type: Number,
            required: true,
        },
        categories: {
            type: Array
        },
        statuses: {
            type: Array
        },
        initialProduct: {
            Object
        }
    },
    data: function() {
        return {
            indexLanguage: 0,
            languages: this.$store.state.global.languages,
            translations: [],
            inventors: [],
            _id: "",
            images: [],
            isLoading: false,
            categorySelected: "",
            statusSelected: "",
            inventorSelecteds: [],
            isSpecial: false,
            removePics: []
        };
    },
    components: {
        AutoComplete,
        FieldProduct
    },
    computed: {
        title: function() {
            if (this.mode === 0) {
                return "Add";
            } else {
                return "Edit";
            }
        },
        selectedLang: function() {
            return this.translation[this.indexLanguage];
        }
    },
    methods: {
        updateValue: function(index, translation) {
            this.translations[index] = translation;
        },
        selectLanguage(index) {
            this.indexLanguage = Number.parseInt(index);
        },
        updateProduct() {
            this.$validator.validateAll('product-scope').then((result) => {
                if (result) {
                    this.isLoading = true;
                    let inventorTmps = [];
                    for (let inventTmp of this.inventorSelecteds) {
                        if (inventTmp._id.length > 0) {
                            inventorTmps.push(inventTmp._id);
                        }
                    }
                    var productTmp = {
                        translations: JSON.stringify(this.translations),
                        category: this.categorySelected,
                        status: this.statusSelected,
                        inventor: inventorTmps,
                        special: this.isSpecial
                    };
                    if (this.mode === 0) {
                        this.axios.post('product/', productTmp).then(res => {
                            this._id = res.data.content._id;
                            this.updateImageProduct();
                        });
                    } else {
                        this.axios.put('product/' + this._id, productTmp).then(res => {
                            this.updateImageProduct();
                        });
                    }
                }
            });
        },
        updateImageProduct() {
            for (let path of this.removePics) {
                this.axios.post('product/' + this._id + '/removeImage', { path: path }).then(res => {
                    console.log(res.data);
                });
            }
            if (this.images.length > 0) {
                let lenImages = this.images.length;
                let countRound = 0;
                for (let image of this.images) {
                    if (image.type === 1 && image.file !== undefined) {
                        const formData = new FormData();
                        formData.append('image', image.file);
                        this.axios.post('product/' + this._id + '/uploadImage', formData).then(res => {
                            console.log(res.data);
                            countRound++;
                            if (countRound >= lenImages) {
                                this.updateFinish();
                            }
                        });
                    } else {
                        countRound++;
                        if (countRound >= lenImages) {
                            this.updateFinish();
                        }
                    }
                }
            } else {
                this.updateFinish();
            }
        },
        deleteProduct() {
            this.$validator.validate('delete').then((result) => {
                if (result) {
                    this.isLoading = true;
                    this.axios.delete('product/' + this._id).then(res => {
                        this.isFillDelete = false;
                        this.updateFinish();
                    });
                }
            });
        },
        updateFileImage(file) {
            this.fileImage = file;
        },
        loadInventor: _.debounce(function(keyword) {
            this.axios.get("inventor/?keyword=" + keyword).then(res => {
                this.inventors = [];
                if (keyword.length === 0) return
                for (let data of res.data.content) {
                    let title = "";
                    for (let tran of data.translations) {
                        if (tran.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1) {
                            title = tran.name;
                            break;
                        }
                    }
                    let inventor = {
                        'title': title,
                        '_id': data._id
                    };
                    this.inventors.push(inventor);
                }
            }).catch(function(thrown) {
                console.log(thrown);
            });
        }, 500),
        updateFinish() {
            this.isLoading = false;
            this.$emit('reload-list');
            this.$emit('close')
        },
        addInventor() {
            let inventTmp = {
                _id: "",
                title: ""
            }
            this.inventorSelecteds.push(inventTmp);
        },
        addImage() {
            let img = {
                type: 1,
                file: undefined,
            };
            this.images.push(img);
            this.$nextTick();
        },
        removeImage(index) {
            if (this.images[index].type === 0) {
                this.removePics.push(this.images[index].url);
            }
            this.images.splice(index, 1);
            this.$nextTick();
        },
        getUUID(){
            return uuidv1();
        }
    },
    created() {
        if (this.mode === 0) {
            for (let i = 0; i < this.languages.length; i++) {
                var translation = {};
                translation['language'] = this.languages[i].abbr;
                translation['title'] = "";
                translation['detail'] = "";
                this.translations.push(translation);
            }
        } else {
            for (let imageUrl of this.initialProduct.image) {
                let img = {
                    type: 0,
                    url: imageUrl,
                };
                this.images.push(img);
            }
            for (let inventor of this.initialProduct.inventor) {
                let option = {
                    title: inventor.translations[0].name,
                    _id: inventor._id
                }
                this.inventorSelecteds.push(option);
            }
            this._id = this.initialProduct._id;
            this.categorySelected = this.initialProduct.category._id;
            this.statusSelected = this.initialProduct.status._id;
            this.isSpecial = this.initialProduct.special;
            for (let i = 0; i < this.initialProduct.translations.length; i++) {
                var translation = {};
                translation['language'] = this.languages[i].abbr;
                translation['title'] = this.initialProduct.translations[i].title;
                translation['detail'] = this.initialProduct.translations[i].detail;
                this.translations.push(translation);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.mar-bot-15 {
    margin-bottom: 15px;
}
</style>
