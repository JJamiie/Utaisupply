<template lang="pug">
div
    .modal.is-active
        .modal-background
        .modal-card
            header.modal-card-head
                p.modal-card-title {{title}} Portfolio
            section.modal-card-body
                tab-choose-language(:indexLanguage="indexLanguage" @select-language="selectLanguage")
                FieldPortfolio(v-for="(lang, index) in languages" v-bind:key="getUUID()" v-bind:initialPortfolio="translations[index]" v-bind:index="index" v-show="indexLanguage == index" v-on:update-value="updateValue")
                .underline
                form(data-vv-scope="portfolio-scope")
                    .field
                        label.label Category
                            .control.is-expaned
                                .select.is-fullwidth(v-bind:class="{'is-danger': errors.has('portfolio-scope.category')}")
                                    select(name="category" v-model="categorySelected" v-validate="'required'")
                                        option(v-bind:value="''") Select category
                                        option(v-for='category in categories' v-bind:value="category._id") {{category.translations[0].name}}
                                    p.help.is-danger(v-show="errors.has('portfolio-scope.category')") {{errors.first('portfolio-scope.category')}}
                    .field
                        label.label Image
                        input-file(v-for="(image,index) in images" v-bind:key="getUUID()" v-model="images[index]" v-bind:intialIsRemove="true" @remove="removeImage(index)" )
                        .has-text-centered
                            a.button(@click="addImage") 
                                span.icon
                                    i.fa.fa-plus
                                span Add
                .field.fieldDelete(v-if="mode === 1")
                    .columns
                        .column
                            .control
                                input.input( type="text" v-bind:class="{'is-danger': errors.has('delete')}" v-validate="'required|regex:delete'" name="delete" placeholder="Please fill delete before deleting")
                                p.help.is-danger(v-show="errors.has('delete')") {{errors.first('delete')}}
                        .column.is-narrow
                            a.button.is-danger.is-outlined(@click="deletePortfolio")
                                span Delete
            footer.modal-card-foot
                button.button.is-success(@click="updatePortfolio" v-bind:class="{ 'is-loading': isLoading }") {{title}}
                button.button(@click="$emit('close')") Cancel
            
</template>

<script>
import uuidv1 from "uuid/v1";
import FieldPortfolio from "./FieldPortfolio";
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
        initialPortfolio: {
            Object
        }
    },
    data: function() {
        return {
            indexLanguage: 0,
            languages: this.$store.state.global.languages,
            translations: [],
            _id: "",
            images: [],
            isLoading: false,
            categorySelected: "",
            removePics: []
        };
    },
    components: {
        AutoComplete,
        FieldPortfolio
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
        updatePortfolio() {
            this.$validator.validateAll('portfolio-scope').then((result) => {
                if (result) {
                    this.isLoading = true;
                    var portfolioTmp = {
                        translations: JSON.stringify(this.translations),
                        category: this.categorySelected
                    };
                    if (this.mode === 0) {
                        this.axios.post('portfolio/', portfolioTmp).then(res => {
                            this._id = res.data.content._id;
                            this.updateImagePortfolio();
                        });
                    } else {
                        this.axios.put('portfolio/' + this._id, portfolioTmp).then(res => {
                            this.updateImagePortfolio();
                        });
                    }
                }
            });
        },
        updateImagePortfolio() {
            for (let path of this.removePics) {
                this.axios.post('portfolio/' + this._id + '/removeImage', { path: path }).then(res => {
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
                        this.axios.post('portfolio/' + this._id + '/uploadImage', formData).then(res => {
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
        deletePortfolio() {
            this.$validator.validate('delete').then((result) => {
                if (result) {
                    this.isLoading = true;
                    this.axios.delete('portfolio/' + this._id).then(res => {
                        this.isFillDelete = false;
                        this.updateFinish();
                    });
                }
            });
        },
        updateFileImage(file) {
            this.fileImage = file;
        },
        updateFinish() {
            this.isLoading = false;
            this.$emit('reload-list');
            this.$emit('close')
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
            for (let imageUrl of this.initialPortfolio.image) {
                let img = {
                    type: 0,
                    url: imageUrl,
                };
                this.images.push(img);
            }
            this._id = this.initialPortfolio._id;
            this.categorySelected = this.initialPortfolio.category._id;
            for (let i = 0; i < this.initialPortfolio.translations.length; i++) {
                var translation = {};
                translation['language'] = this.languages[i].abbr;
                translation['title'] = this.initialPortfolio.translations[i].title;
                translation['detail'] = this.initialPortfolio.translations[i].detail;
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
