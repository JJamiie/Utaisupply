<template lang="pug">
div 
    section.hero.is-medium.header-portfolio
        img(src="~images/portfolio.jpg")
        .hero-body
            .container.has-text-centered
                h3.title.is-size-1.is-text-white <strong>{{$t("msg.portfolio_title")}}</strong>
                h4.subtitle.is-size-5.is-text-white {{$t("msg.portfolio_subtitle")}}
        
    section.hero
        .hero-body
            .container
                .columns
                    .column.is-4
                        .field.has-addons
                            .control
                                a.button.is-static.is-text-grey-dark {{$t("msg.service_title")}}
                            .control.is-expanded
                                .select.is-fullwidth
                                    select(v-model="categorySelected" @input="loadPortfolio(0)")
                                        option(v-bind:value="''") All
                                        option(v-for="category in categories"  v-bind:value="category._id") {{category.translations[0].name}}
                    .column.is-8
                        .field.has-addons
                            .control.is-expanded.has-icons-right
                                input.input(type="text" v-bind:placeholder="$t('msg.find_an_portfolio')" v-model="keyword")
                                span.icon.is-small.is-right(v-if="isLoading")
                                    i.fa.fa-circle-o-notch.fa-spin
                            .control
                                a.button.is-primary {{$t("msg.search")}}
                   
                p.has-text-centered(v-if="portfolios.length === 0") {{$t("msg.no_portfolio_found")}} 
                .columns.is-multiline
                    .column.is-4(v-for="(portfolio,index) in portfolios")
                        .card.j-grow
                            .card-image(v-if="portfolio.image.length > 0")
                                figure.image.is-4by3
                                    img(:src="portfolio.image[0]" alt="portfolio")
                            .card-content
                                .media
                                    .media-content
                                        p.title.is-4 {{portfolio.translations.find(obj => obj.language === $i18n.locale).title}}
                                .content 
                                    p.detail {{portfolio.translations.find(obj => obj.language === $i18n.locale).detail}}
                                    .tags
                                        span.tag.is-primary {{portfolio.category.translations[0].name}} 
                nav.pagination(role="navigation" aria-label="pagination")
                    ul.pagination-list
                        li(v-for="index in totalPage")
                            a.pagination-link(v-bind:class="isCurrentPage(index)" v-on:click="changePage(index)") {{index}}
    page-footer

</template>

<script>
const LIMIT = 9;
export default {
    data: function() {
        return {
            keyword: "",
            isLoading: false,
            currentPage: 1,
            totalPage: 0,
            portfolios: [],
            categories: [],
            categorySelected: "",
        }
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
        }
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
.header-portfolio {
    position: relative;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        filter: brightness(0.5);
    }
}
</style>
