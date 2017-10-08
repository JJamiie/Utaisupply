<template lang="pug">
    .container
        .columns.is-mobile
            .column.is-narrow
                a.button.is-info(@click="showModal = true, mode = 0") Add Product
            
            .column
                .field.has-addons
                    .control.is-expanded.has-icons-right
                        input.input(type="text" placeholder="Find an product" v-model="keyword")
                        span.icon.is-small.is-right(v-if="isLoading")
                            i.fa.fa-circle-o-notch.fa-spin
                    .control
                        a.button.is-info Search
        .columns.is-mobile
            .column.is-6
                .field.has-addons
                    .control
                        a.button.is-static.is-text-grey-dark Category
                    .control.is-expanded
                        .select.is-fullwidth
                            select(v-model="categorySelected" @input="loadProduct(0)")
                                option(v-bind:value="''") All
                                option(v-for="category in categories"  v-bind:value="category._id") {{category.translations[0].name}}
            .column.is-6
                .field.has-addons
                    .control
                        a.button.is-static.is-text-grey-dark Status
                    .control.is-expanded
                        .select.is-fullwidth
                            select(v-model="statusSelected" @input="loadProduct(0)")
                                option(v-bind:value="''") All
                                option(v-for="status in statuses" v-bind:value="status._id") {{status.translations[0].name}}
        p.has-text-centered(v-if="products.length === 0") No product found 
        .columns.products.is-multiline
            .column.is-4(v-for="(product,index) in products")
                .card(@click="showModal = true, mode = 1, productSelected = index").j-grow
                    .card-image(v-if="product.image.length > 0")
                        figure.image.is-4by3
                            img(:src="product.image[0]" alt="product")
                    .card-content
                        .media
                            .media-content
                                p.title.is-4 {{product.translations[0].title}}
                        .content 
                            p.detail {{product.translations[0].detail}}
                            .tags
                                span.tag.is-primary {{product.category.translations[0].name}} 
                                span.tag.is-warning {{product.status.translations[0].name}}
                            .tags
                                span.tag(v-for="inventor in product.inventor") {{inventor.translations[0].name}} 
                            
        nav.pagination(role="navigation" aria-label="pagination")
            ul.pagination-list
                li(v-for="index in totalPage")
                    a.pagination-link(v-bind:class="isCurrentPage(index)" v-on:click="changePage(index)") {{index}}
        ModalProduct(v-if="showModal" @close="showModal = false" v-bind:mode="mode" v-bind:initialProduct='products[productSelected]' v-on:reload-list="loadProduct(0)" v-bind:categories="categories" v-bind:statuses="statuses")
</template>

<script>
import ModalProduct from "./components/ModalProduct";
const LIMIT = 9;

export default {
    data: function() {
        return {
            products: [],
            productSelected: -1,
            categories: [],
            categorySelected: "",
            statuses: [],
            statusSelected: "",
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
        ModalProduct
    },
    methods: {
        loadCategory: function() {
            this.axios.get("category/").then(res => {
                this.categories = res.data;
            }).catch(function(e) {
                console.log(e);
            });
        },
        loadStatus: function() {
            this.axios.get("status/").then(res => {
                this.statuses = res.data;
            }).catch(function(e) {
                console.log(e);
            });
        },
        loadProduct: _.debounce(function(offset) {
            this.isLoading = true;
            this.axios.get("product/?limit=" + LIMIT + "&offset=" + offset + "&keyword=" + this.keyword + "&category=" + this.categorySelected + "&status=" + this.statusSelected).then(res => {
                this.count = res.data.count;
                this.products = res.data.content;
                console.log(this.products);
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
            this.loadProduct(index - 1);
        },
        getTitleProduct(product) {
          if (this.$i18n.locale == 'en') {
            return product.translations.find(obj => obj.language === "en").title;
          } else if (this.$i18n.locale == 'th') {
            return product.translations.find(obj => obj.language === "th").title;
          } else if (this.$i18n.locale == 'ja') {
            return product.translations.find(obj => obj.language === "ja").title;
          }
        },
        getDescProduct(product) {
          if (this.$i18n.locale == 'en') {
            return product.translations.find(obj => obj.language === "en").detail;
          } else if (this.$i18n.locale == 'th') {
            return product.translations.find(obj => obj.language === "th").detail;
          } else if (this.$i18n.locale == 'ja') {
            return product.translations.find(obj => obj.language === "ja").detail;
          }
        },
    },
    watch: {
        keyword: function(value) {
            this.loadProduct(0);
        }
    },
    created() {
        this.loadCategory();
        this.loadStatus();
        this.loadProduct(0);
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
