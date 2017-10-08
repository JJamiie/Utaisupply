<template lang="pug">
.container
    .columns
        .column.is-narrow
            a.button.is-info(@click="showModal = true, mode = 0") Add News
        .column
            .field.has-addons
                .control.is-expanded.has-icons-right
                    input.input(type="text" placeholder="Find an news" v-model="keyword")
                    span.icon.is-small.is-right(v-if="isLoading")
                        i.fa.fa-circle-o-notch.fa-spin
                .control
                    a.button.is-info Search
    p.has-text-centered(v-if="news.length === 0") No news found 
    .columns.products.is-multiline
        .column.is-4(v-for="(newsTmp,index) in news")
            .card(@click="showModal = true, mode = 1, newSelected = index").j-grow
                .card-image(v-if="newsTmp.image")
                    figure.image.is-4by3
                        img(:src="newsTmp.image" alt="news")
                .card-content
                    .media
                        .media-content
                            p.title.is-4 {{newsTmp.translations[0].title}}
                    .content 
                        p.detail {{newsTmp.translations[0].detail}} </br>
    nav.pagination(role="navigation" aria-label="pagination")
        ul.pagination-list
            li(v-for="index in totalPage")
                a.pagination-link(v-bind:class="isCurrentPage(index)" v-on:click="changePage(index)") {{index}}
    ModalNews(v-if="showModal" @close="showModal = false" v-bind:mode="mode" v-bind:initialNews='news[newSelected]' v-on:reload-list="loadNews(0)")
    
</template>

<script>
import ModalNews from './components/ModalNews';
import moment from "moment";
const LIMIT = 9;

export default {
    data: function() {
        return {
            showModal: false,
            news: [],
            newSelected: -1,
            mode: 0,
            count: 0,
            currentPage: 1,
            totalPage: 0,
            keyword: "",
            isLoading: false
        };
    },
    components: {
        ModalNews
    },
    methods: {
        loadNews: _.debounce(function(offset) {
            this.isLoading = true;
            this.axios.get("news/?limit=" + LIMIT + "&offset=" + offset + "&keyword=" + this.keyword).then(res => {
                this.count = res.data.count;
                this.news = res.data.content;
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
            this.loadNews(index - 1);
        },
        rowNumber: function(index) {
            return (LIMIT * (this.currentPage - 1)) + index + 1;
        },
        getNewsTime: function(datetime) {
            return moment(new Date(datetime)).format('lll');
        }
    },
    watch: {
        keyword: function(value) {
            this.loadNews(0);
        }
    },
    created() {
        this.loadNews(0);
    }
}
</script>

<style lang="scss" scoped>
.container {
    padding-top: 30px;
    padding-bottom: 30px;
    .detail{
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
    }
}
</style>
