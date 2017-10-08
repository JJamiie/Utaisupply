<template lang="pug">
.container
    .columns
        .column.is-narrow
            a.button.is-info(@click="showModal = true, mode = 0") Add Event
        .column
            .field.has-addons
                .control.is-expanded.has-icons-right
                    input.input(type="text" placeholder="Find an event" v-model="keyword")
                    span.icon.is-small.is-right(v-if="isLoading")
                        i.fa.fa-circle-o-notch.fa-spin
                .control
                    a.button.is-info Search
    p.has-text-centered(v-if="events.length === 0") No event found 
    .columns.products.is-multiline
        .column.is-4(v-for="(event,index) in events")
            .card(@click="showModal = true, mode = 1, eventSelected = index").j-grow
                .card-image(v-if="event.image")
                    figure.image.is-4by3
                        img(:src="event.image" alt="event")
                .card-content
                    .media
                        .media-content
                            p.title.is-4 {{event.translations[0].title}}
                    .content 
                        p.detail {{event.translations[0].detail}} </br>
                        a(v-if="event.translations[0].place") @ {{event.translations[0].place}} </br>
                        time {{getEventTime(event.starttime,event.endtime)}}
    nav.pagination(role="navigation" aria-label="pagination")
        ul.pagination-list
            li(v-for="index in totalPage")
                a.pagination-link(v-bind:class="isCurrentPage(index)" v-on:click="changePage(index)") {{index}}
    ModalEvent(v-if="showModal" @close="showModal = false" v-bind:mode="mode" v-bind:initialEvent='events[eventSelected]' v-on:reload-list="loadEvent(0)")
    
</template>

<script>
    import ModalEvent from './components/ModalEvent';
    import moment from "moment";
    import twix from "twix";
    
    const LIMIT = 9;
    
    export default {
        data: function() {
            return {
                showModal: false,
                events: [],
                eventSelected: -1,
                mode: 0,
                count: 0,
                currentPage: 1,
                totalPage: 0,
                keyword: "",
                isLoading: false
            };
        },
        components: {
            ModalEvent
        },
        methods: {
            loadEvent: _.debounce(function(offset) {
                this.isLoading = true;
                this.axios.get("event/?limit=" + LIMIT + "&offset=" + offset + "&keyword=" + this.keyword).then(res => {
                    this.count = res.data.count;
                    this.events = res.data.content;
                    this.totalPage = Math.ceil(this.count / LIMIT);
                    this.currentPage = offset + 1;
                    this.isLoading = false;
                }).catch(function(thrown) {
                    console.log(thrown);
                });
            }, 500),
            isCurrentPage: function(index) {
                return {
                    'is-current': index === this.currentPage
                }
            },
            changePage: function(index) {
                this.loadEvent(index - 1);
            },
            rowNumber: function(index) {
                return (LIMIT * (this.currentPage - 1)) + index + 1;
            },
            getEventTime: function(starttime, endtime) {
                return moment(new Date(starttime)).twix(new Date(endtime)).format();
            }
        },
        watch: {
            keyword: function(value) {
                this.loadEvent(0);
            }
        },
        created() {
            this.loadEvent(0);
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        padding-top: 30px;
        padding-bottom: 30px;
        .detail {
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
        }
    }
</style>
