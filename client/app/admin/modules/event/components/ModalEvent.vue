<template lang="pug">
div
    .modal.is-active 
        .modal-background
        .modal-card
            header.modal-card-head
                p.modal-card-title {{title}} Event
            section.modal-card-body
                tab-choose-language(:indexLanguage="indexLanguage" @select-language="selectLanguage")
                FieldEvent(v-for="(lang, index) in languages" v-bind:key="getUUID()" v-bind:initialEvent="translations[index]" v-bind:index="index" v-show="indexLanguage == index" v-on:update-value="updateValue")
                .underline
                .columns
                    .column
                        .field
                            label.label Start date
                            .control
                                datepicker(placeholder="Select Date" v-model="startdate")
                    .column
                        .field
                            label.label Start time
                            .control
                                vue-timepicker(format="HH:mm" v-model="starttime")
                .columns
                    .column
                        .field
                            label.label End date
                            .control
                                datepicker(placeholder="Select Date" v-model="enddate")
                    .column
                        .field
                            label.label End time
                            .control
                                vue-timepicker(format="HH:mm" v-model="endtime")
                input-file(v-model="image")
                .field.fieldDelete(v-if="mode === 1")
                    .columns
                        .column
                            .control
                                input.input( type="text" v-bind:class="{'is-danger': errors.has('delete')}" v-validate="'required|regex:delete'" name="delete" placeholder="Please fill delete before deleting")
                                p.help.is-danger(v-show="errors.has('delete')") {{errors.first('delete')}}
                        .column.is-narrow
                            a.button.is-danger.is-outlined(@click="deleteEvent")
                                span Delete
                
            footer.modal-card-foot
                button.button.is-success(@click="updateEvent" v-bind:class="{ 'is-loading': isLoading }") {{title}}
                button.button(@click="$emit('close')") Cancel
</template>

<script>
    import uuidv1 from "uuid/v1";
    import FieldEvent from "./FieldEvent";
    import Datepicker from 'vuejs-datepicker';
    import VueTimepicker from 'vue2-timepicker'
    import moment from "moment";
    export default {
        props: {
            mode: {
                type: Number,
                required: true,
            },
            initialEvent: {
                Object
            }
    
        },
        data: function() {
            return {
                indexLanguage: 0,
                languages: this.$store.state.global.languages,
                translations: [],
                _id: "",
                image: {
                    type: 0
                },
                startdate: "",
                enddate: "",
                starttime: {
                    HH: "",
                    mm: "",
                },
                endtime: {
                    HH: "",
                    mm: "",
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
            FieldEvent,
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
            updateEvent() {
                this.isLoading = true;
                var eventTmp = {
                    translations: JSON.stringify(this.translations),
                    starttime: this.getDatetime(this.startdate, this.starttime),
                    endtime: this.getDatetime(this.enddate, this.endtime)
                };
                if (this.mode === 0) {
                    this.axios.post('event/', eventTmp).then(res => {
                        this._id = res.data.content._id;
                        this.updateImageEvent();
                    });
                } else {
                    this.axios.put('event/' + this._id, eventTmp).then(res => {
                        this.updateImageEvent();
                    });
                }
            },
            getDatetime(date, time) {
                var datetime = new Date(date);
                datetime.setHours(time.HH, time.mm, 0);
                return datetime;
            },
            updateImageEvent() {
                if (this.image.type === 1 && this.image.file !== undefined) {
                    const formData = new FormData();
                    formData.append('image', this.image.file);
                    this.axios.post('event/' + this._id + '/uploadImage', formData).then(res => {
                        this.updateFinish();
                    });
                } else {
                    this.updateFinish();
                }
            },
            deleteEvent() {
                this.$validator.validate('delete').then((result) => {
                    if (result) {
                        this.isLoading = true;
                        this.axios.delete('event/' + this._id).then(res => {
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
            setDate(start, datetime) {
                let date = moment(datetime).format('YYYY-MM-DD');
                let time = {
                    HH: moment(datetime).format('HH'),
                    mm: moment(datetime).format('mm')
                }
                if (start) {
                    this.startdate = date;
                    this.starttime = time;
                } else {
                    this.enddate = date;
                    this.endtime = time;
                }
            },
            getUUID() {
                return uuidv1();
            }
        },
        created() {
            if (this.mode === 0) {
                this.setDate(true, new Date());
                this.setDate(false, new Date());
                for (let i = 0; i < this.languages.length; i++) {
                    var translation = {};
                    translation['language'] = this.languages[i].abbr;
                    translation['title'] = "";
                    translation['detail'] = "";
                    translation['place'] = "";
                    this.translations.push(translation);
                }
            } else {
                console.log(this.initialEvent);
                this.setDate(true, new Date(this.initialEvent.starttime));
                this.setDate(false, new Date(this.initialEvent.endtime));
                this.location = this.initialEvent.location;
                this._id = this.initialEvent._id;
                let img = {
                    type: 0,
                    url: this.initialEvent.image,
                };
                this.image = img;
                for (let i = 0; i < this.initialEvent.translations.length; i++) {
                    var translation = {};
                    translation['language'] = this.languages[i].abbr;
                    translation['title'] = this.initialEvent.translations[i].title;
                    translation['detail'] = this.initialEvent.translations[i].detail;
                    translation['place'] = this.initialEvent.translations[i].place;
                    this.translations.push(translation);
                }
            }
        }
    }
</script>

<style lang="scss">
    
</style>
