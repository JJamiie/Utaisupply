<template lang="pug">
div
    .modal.is-active 
        .modal-background
        .modal-card
            header.modal-card-head
                p.modal-card-title {{title}} Inventor
            section.modal-card-body
                tab-choose-language(:indexLanguage="indexLanguage" @select-language="selectLanguage")
                FieldInventor(v-for="(lang, index) in languages" v-bind:key="getUUID()" v-bind:initialInventor="translations[index]" v-bind:index="index" v-show="indexLanguage == index" v-on:update-value="updateValue")
                .underline
                .field
                    label.label Email
                    .control
                        input.input(v-model="email" type="text")
                .field
                    label.label Phone number
                    .control
                        input.input(v-model="phoneno" type="text")
                .field
                    label.label Image        
                    input-file(v-model="image")
                .field.fieldDelete(v-if="mode === 1")
                    .columns
                        .column
                            .control
                                input.input( type="text" v-bind:class="{'is-danger': errors.has('delete')}" v-validate="'required|regex:delete'" name="delete" placeholder="Please fill delete before deleting")
                                p.help.is-danger(v-show="errors.has('delete')") {{errors.first('delete')}}
                        .column.is-narrow
                            a.button.is-danger.is-outlined(@click="deleteInventor")
                                span Delete
                
            footer.modal-card-foot
                button.button.is-success(@click="updateInventor" v-bind:class="{ 'is-loading': isLoading }") {{title}}
                button.button(@click="$emit('close')") Cancel
</template>

<script>
import FieldInventor from "./FieldInventor";
import uuidv1 from "uuid/v1";

export default {
    props: {
        mode: {
            type: Number,
            required: true,
        },
        initialInventor: {
            Object
        }

    },
    data: function() {
        return {
            indexLanguage: 0,
            languages: this.$store.state.global.languages,
            translations: [],
            _id: "",
            email: "",
            phoneno: "",
            image: {
                type: 0
            },
            isLoading: false,
        };
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
    components: {
        FieldInventor
    },
    methods: {
        selectLanguage(index) {
            this.indexLanguage = Number.parseInt(index);
        },
        updateValue: function(index, translation) {
            this.translations[index] = translation;
        },
        updateInventor() {
            this.isLoading = true;
            if (this.mode === 0) {
                this.axios.post('inventor/', {
                    translations: JSON.stringify(this.translations),
                    email: this.email,
                    phoneno: this.phoneno
                }).then(res => {
                    this._id = res.data.content._id;
                    this.updateImageInventor();
                });
            } else {
                this.axios.put('inventor/' + this._id, {
                    translations: JSON.stringify(this.translations),
                    email: this.email,
                    phoneno: this.phoneno
                }).then(res => {
                    this.updateImageInventor();
                });
            }
        },
        updateImageInventor() {
            if (this.image.type === 1 && this.image.file !== undefined) {
                const formData = new FormData();
                formData.append('image', this.image.file);
                this.axios.post('inventor/' + this._id + '/uploadImage', formData).then(res => {
                    this.updateFinish();
                });
            } else {
                this.updateFinish();
            }
        },
        deleteInventor() {
            this.$validator.validate('delete').then((result) => {
                if (result) {
                    this.isLoading = true;
                    this.axios.delete('inventor/' + this._id).then(res => {
                        this.isFillDelete = false;
                        this.updateFinish();
                    });
                }
            });
        },
        updateFinish() {
            this.isLoading = false;
            this.$emit('reload-list');
            this.$emit('close')
        },
        getUUID() {
            return uuidv1();
        }
    },
    created() {
        if (this.mode === 0) {
            for (let i = 0; i < this.languages.length; i++) {
                var translation = {};
                translation['language'] = this.languages[i].abbr;
                translation['name'] = "";
                translation['specialty'] = "";
                this.translations.push(translation);
            }
        } else {
            this.email = this.initialInventor.email;
            this.phoneno = this.initialInventor.phoneno;
            this._id = this.initialInventor._id;
            let img = {
                type: 0,
                url: this.initialInventor.image,
            };
            this.image = img;
            for (let i = 0; i < this.initialInventor.translations.length; i++) {
                var translation = {};
                translation['language'] = this.initialInventor.translations[i].language;
                translation['name'] = this.initialInventor.translations[i].name;
                translation['specialty'] = this.initialInventor.translations[i].specialty
                this.translations.push(translation);
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
