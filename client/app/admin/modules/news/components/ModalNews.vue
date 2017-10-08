<template lang="pug">
div
    .modal.is-active 
        .modal-background
        .modal-card
            header.modal-card-head
                p.modal-card-title {{title}} News
            section.modal-card-body
                tab-choose-language(:indexLanguage="indexLanguage" @select-language="selectLanguage")
                FieldNews(v-for="(lang, index) in languages" v-bind:key="getUUID()" v-bind:initialNews="translations[index]" v-bind:index="index" v-show="indexLanguage == index" v-on:update-value="updateValue")
                .underline
                input-file(v-model="image")
                .field.fieldDelete(v-if="mode === 1")
                    .columns
                        .column
                            .control
                                input.input( type="text" v-bind:class="{'is-danger': errors.has('delete')}" v-validate="'required|regex:delete'" name="delete" placeholder="Please fill delete before deleting")
                                p.help.is-danger(v-show="errors.has('delete')") {{errors.first('delete')}}
                        .column.is-narrow
                            a.button.is-danger.is-outlined(@click="deleteNews")
                                span Delete
                
            footer.modal-card-foot
                button.button.is-success(@click="updateNews" v-bind:class="{ 'is-loading': isLoading }") {{title}}
                button.button(@click="$emit('close')") Cancel
</template>

<script>
import uuidv1 from "uuid/v1";
import FieldNews from "./FieldNews";
import Datepicker from 'vuejs-datepicker';
import VueTimepicker from 'vue2-timepicker'
import moment from "moment";
export default {
    props: {
        mode: {
            type: Number,
            required: true,
        },
        initialNews: {
            Object
        }
    },
    data: function() {
        return {
            indexLanguage: 0,
            languages: this.$store.state.global.languages,
            translations: [],
            _id: "",
            date: "",
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
        FieldNews,
        Datepicker,
        VueTimepicker
    },
    methods: {
        selectLanguage(index) {
            this.indexLanguage = Number.parseInt(index);
        },
        updateValue: function(index, translation) {
            this.translations[index] = translation;
        },
        updateNews() {
            this.isLoading = true;
            var newsTmp = {
                translations: JSON.stringify(this.translations),
            };
            if (this.mode === 0) {
                this.axios.post('news/', newsTmp).then(res => {
                    this._id = res.data.content._id;
                    this.updateImageNews();
                });
            } else {
                this.axios.put('news/' + this._id, newsTmp).then(res => {
                    this.updateImageNews();
                });
            }
        },

        updateImageNews() {
            if (this.image.type === 1 && this.image.file !== undefined) {
                const formData = new FormData();
                formData.append('image', this.image.file);
                this.axios.post('news/' + this._id + '/uploadImage', formData).then(res => {
                    console.log(res.data);
                    this.updateFinish();
                });
            } else {
                this.updateFinish();
            }
        },
        deleteNews() {
            this.$validator.validate('delete').then((result) => {
                if (result) {
                    this.isLoading = true;
                    this.axios.delete('news/' + this._id).then(res => {
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
                translation['title'] = "";
                translation['detail'] = "";
                this.translations.push(translation);
            }
        } else {
            this._id = this.initialNews._id;
            let img = {
                type: 0,
                url: this.initialNews.image,
            };
            this.image = img;
            for (let i = 0; i < this.initialNews.translations.length; i++) {
                var translation = {};
                translation['language'] = this.languages[i].abbr;
                translation['title'] = this.initialNews.translations[i].title;
                translation['detail'] = this.initialNews.translations[i].detail;
                this.translations.push(translation);
            }
        }
    }
}
</script>

<style lang="scss">

</style>
