<template lang="pug">
div
    section.hero.content-product-main
        .hero-body
            .container
                .has-text-centered
                    h3.title.is-size-1.is-text-blue <strong>สินค้า</strong>
                    h4.subtitle.is-size-5.is-text-blue ด้วยความใส่ใจในราคามิตรภาพ
                .columns.products
                    .column#stainless
                        .container-img
                            img(src="~images/stainless.jpg" alt="Stainless" @click="product = 0,showModal = true")
                            .border-title
                                .bg-title
                                    h4.title.is-size-6.is-font-regular สเตนเลส
                    .column#steel
                        .container-img
                            img(src="~images/steel.jpg" alt="Steel" @click="product = 1,showModal = true")
                            .border-title
                                .bg-title
                                    h4.title.is-size-6.is-font-regular เหล็ก
                    .column#zinc
                        .container-img
                            img(src="~images/zinc.jpg" alt="Zinc" @click="product = 2,showModal = true")
                            .border-title
                                .bg-title
                                    h4.title.is-size-6.is-font-regular ซิงค์
                .columns
                    .column
                        .container-img
                            img(src="~images/plywood.jpg" alt="Plywood")
                            .border-title
                                .bg-title
                                    h4.title.is-size-6.is-font-regular ไม้อัด (Plywood)
                    .column
                        .container-img
                            img(src="~images/king.jpg" alt="Arch")
                            .border-title
                                .bg-title
                                    h4.title.is-size-6.is-font-regular ซุ้มทรงพระเจริญ
                    .column
                        .container-img
                            img(src="~images/bumper.jpg" alt="Bumper")
                            .border-title
                                .bg-title
                                    h4.title.is-size-6.is-font-regular กันชน
    ModalProduct(v-if="showModal" @close="showModal = false" v-bind:product="product")
    page-footer
</template>

<script>
    import ModalProduct from "./components/ModalProduct";

    
    export default {
        components: {
            ModalProduct
        },
        data: function(){
            return {
                showModal: false,
                product: 0
            }
        }
    }
</script>

<style lang="scss" scoped>
    .content-product-header {
        .hero-body {
            padding-bottom: 0;
        }
    }
    
    .content-product-main {
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        .container {
            @media(min-width: 1179px) {
                width: 60%;
            }
        }
        .products {
            margin-top: 20px;
        }
        .container-img {
            cursor: pointer;
            width: 100%;
            height: 220px;
            position: relative;
            overflow: hidden;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
            img {
                width: 100%;
                height: 100%;
                object-position: left;
                object-fit: cover;
                position: absolute;
                top: 0;
                left: 0;
            }
            img:hover {
                -webkit-transition: all 0.5s ease-in-out;
                -moz-transition: all 0.5s ease-in-out;
                -ms-transition: all 0.5s ease-in-out;
                -o-transition: all 0.5s ease-in-out;
                transition: all 0.5s ease-in-out;
                position: relative;
                -webkit-transform: scale(1.2);
                -ms-transform: scale(1.2);
                -o-transform: scale(1.2);
                transform: scale(1.2);
            }
            .border-title {
                border-style: solid;
                border-color: white;
                padding: 3px;
                border-width: 1px;
                position: absolute;
                -ms-transform: translate(-50%, -50%);
                -webkit-transform: translate(-50%, -50%);
                transform: translate(-50%, -50%);
                top: 50%;
                left: 50%;
                width: 60%;
                z-index: 10;
                .bg-title {
                    width: 100%;
                    padding-top: 8px;
                    padding-bottom: 8px;
                    background-color: white;
                    .title {
                        text-align: center;
                        color: #656565;
                    }
                }
            }
        }
        .columns {
            .column {
                .hero {
                    min-height: 200px !important;
                }
            }
        }
    }
    
</style>
