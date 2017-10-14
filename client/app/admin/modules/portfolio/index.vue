<template lang="pug">
    .container
        .columns.is-mobile
            .column.is-narrow
                a.button.is-info(@click="showModal = true, mode = 0") Add Portfolio
            .column.is-narrow
                .field.has-addons
                    .control
                        a.button.is-static.is-text-grey-dark Category
                    .control.is-expanded
                        .select.is-fullwidth
                            select(v-model="categorySelected" @input="loadPortfolio(0)")
                                option(v-bind:value="''") All
                                option(v-for="category in categories"  v-bind:value="category._id") {{category.translations[0].name}}
            .column
                .field.has-addons
                    .control.is-expanded.has-icons-right
                        input.input(type="text" placeholder="Find an portfolio" v-model="keyword")
                        span.icon.is-small.is-right(v-if="isLoading")
                            i.fa.fa-circle-o-notch.fa-spin
                    .control
                        a.button.is-info Search
        p.has-text-centered(v-if="portfolios.length === 0") No portfolio found 
        .columns.portfolios.is-multiline
            .column.is-4(v-for="(portfolio,index) in portfolios")
                .card(@click="showModal = true, mode = 1, portfolioSelected = index").j-grow
                    .card-image(v-if="portfolio.image.length > 0")
                        figure.image.is-4by3
                            img(:src="portfolio.image[0]" alt="portfolio")
                    .card-content
                        .media
                            .media-content
                                p.title.is-4 {{portfolio.translations[0].title}}
                        .content 
                            p.detail {{portfolio.translations[0].detail}}
                            .tags
                                span.tag.is-primary {{portfolio.category.translations[0].name}} 
                            
        nav.pagination(role="navigation" aria-label="pagination")
            ul.pagination-list
                li(v-for="index in totalPage")
                    a.pagination-link(v-bind:class="isCurrentPage(index)" v-on:click="changePage(index)") {{index}}
        ModalPortfolio(v-if="showModal" @close="showModal = false" v-bind:mode="mode" v-bind:initialPortfolio='portfolios[portfolioSelected]' v-on:reload-list="loadPortfolio(0)" v-bind:categories="categories" )
</template>

<script>
import ModalPortfolio from "./components/ModalPortfolio";
const LIMIT = 9;

export default {
    data: function() {
        return {
            portfolios: [],
            portfolioSelected: -1,
            categories: [],
            categorySelected: "",
            showModal: false,
            mode: 0,
            count: 0,
            currentPage: 1,
            totalPage: 0,
            keyword: "",
            isLoading: false
        };
    },
    components: {
        ModalPortfolio
    },
    methods: {
        loadCategory: function() {
            this.axios.get("category/").then(res => {
                this.categories = res.data;
            }).catch(function(e) {
                console.log(e);
            });
        },
        loadPortfolio: _.debounce(function(offset) {
            this.isLoading = true;
            this.axios.get("portfolio/?limit=" + LIMIT + "&offset=" + offset + "&keyword=" + this.keyword + "&category=" + this.categorySelected).then(res => {
                this.count = res.data.count;
                this.portfolios = res.data.content;
                console.log(this.portfolios);
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
            this.loadPortfolio(index - 1);
        },
        getTitlePortfolio(portfolio) {
          if (this.$i18n.locale == 'en') {
            return portfolio.translations.find(obj => obj.language === "en").title;
          } else if (this.$i18n.locale == 'th') {
            return portfolio.translations.find(obj => obj.language === "th").title;
          } else if (this.$i18n.locale == 'ja') {
            return portfolio.translations.find(obj => obj.language === "ja").title;
          }
        },
        getDescPortfolio(portfolio) {
          if (this.$i18n.locale == 'en') {
            return portfolio.translations.find(obj => obj.language === "en").detail;
          } else if (this.$i18n.locale == 'th') {
            return portfolio.translations.find(obj => obj.language === "th").detail;
          } else if (this.$i18n.locale == 'ja') {
            return portfolio.translations.find(obj => obj.language === "ja").detail;
          }
        },
    },
    watch: {
        keyword: function(value) {
            this.loadPortfolio(0);
        }
    },
    created() {
        this.loadCategory();
        this.loadPortfolio(0);
    }
}
</script>

<style lang="scss" scoped>
.container {
    padding-top: 30px;
    padding-bottom: 30px;
    .detail {
        white-space: pre-line;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
    }
}
</style>
