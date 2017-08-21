<template lang="pug">
div
    section.hero.content-product-main
        .hero-body
            .container
                .has-text-centered
                    h3.title.is-1.text-color-white <strong>สินค้า</strong>
                    h4.subtitle.is-5.text-color-white ด้วยความใส่ใจในราคามิตรภาพ
                .columns.products
                    .column#stainless
                        .container-img
                            img(src="/images/stainless.jpg" alt="Stainless")
                            .border-title
                                .bg-title
                                    h4.title.is-6.font-is-regular สเตนเลส
                    .column#steel
                        .container-img
                            img(src="/images/steel.jpg" alt="Steel")
                            .border-title
                                .bg-title
                                    h4.title.is-6.font-is-regular เหล็ก
                    .column#zinc
                        .container-img
                            img(src="/images/zinc.jpg" alt="Zinc")
                            .border-title
                                .bg-title
                                    h4.title.is-6.font-is-regular ซิงค์
                .columns
                    .column
                        .container-img
                            img(src="/images/plywood.jpg" alt="Plywood")
                            .border-title
                                .bg-title
                                    h4.title.is-6.font-is-regular ไม้อัด (Plywood)
                    .column
                        .container-img
                            img(src="/images/king.jpg" alt="Arch")
                            .border-title
                                .bg-title
                                    h4.title.is-6.font-is-regular ซุ้มทรงพระเจริญ
                    .column
                        .container-img
                            img(src="/images/bumper.jpg" alt="Bumper")
                            .border-title
                                .bg-title
                                    h4.title.is-6.font-is-regular กันชน

    .modal.modal-stainless
        .modal-background
        .modal-card
            header.modal-card-head
                p.modal-card-title สเตนเลส (เกรด A และ เกรด B)
                button.modal-delete.delete
            section.modal-card-body
                table.table
                    thead
                        tr
                        th เกรด  
                        th ความหนา    
                        th เบอร์    
                        th ขนาด
                    tbody
                        template(v-for="item in items_stainless")
                            tr
                                td {{item.grade}}
                                td {{item.thick}}
                                td {{item.number}}
                                td {{item.size}}

    .modal.modal-steel
        .modal-background
        .modal-card
            header.modal-card-head
                p.modal-card-title เหล็ก
                button.modal-delete.delete
            section.modal-card-body
                table.table
                    thead
                        tr
                        th ชนิด  
                        th ความหนา    
                        th ขนาด
                    tbody
                        template(v-for="item in items_steel")
                            tr
                                td {{item.type}}
                                td {{item.thick}}
                                td {{item.size}}

    .modal.modal-zinc
        .modal-background
        .modal-card
            header.modal-card-head
                p.modal-card-title ซิงค์ (เกรด A และ เกรด B)
                button.modal-delete.delete
            section.modal-card-body
                - var grades = ["ฟ้า", "", "","", "", "","เทา","","","", "",""]
                - var thicks = ["0.7", "0.8", "0.9","1.0", "1.2", "1.5","0.7","0.8","0.9","1.0","1.2","1.5"]
                - var numbers = ["22", "21", "20","19", "18", "","22", "21", "20", "19", "18",""]
                - var sizes = ["4x8", "4x8", "4x8","4x8", "4x8", "4x8", "4x8", "4x8","4x8", "4x8","4x8" ,"4x8"]
                table.table
                    thead
                        tr
                        th เกรด  
                        th ความหนา    
                        th เบอร์    
                        th ขนาด
                    tbody
                        template(v-for="item in items_zinc")
                            tr
                                td {{item.grade}}
                                td {{item.thick}}
                                td {{item.number}}
                                td {{item.size}}
</template>

<script>
    import Vue from "vue";
    import info_stainless from "./info/stainless.json";
    import info_steel from "./info/steel.json";
    import info_zinc from "./info/zinc.json";
    
    
    export default {
        mounted: function() {
            $(document).ready(function() {
                $('.parallax').parallax();
            });
            $('#stainless').click(function() {
                $('.modal-stainless').addClass('is-active');
            });
    
            $('#zinc').click(function() {
                $('.modal-zinc').addClass('is-active');
            });
    
            $('#steel').click(function() {
                $('.modal-steel').addClass('is-active');
            });
    
            $('.modal-delete').click(function() {
                $('.modal').removeClass('is-active');
            });
    
            $('.modal-background').click(function() {
                $('.modal').removeClass('is-active');
            });
        },
        data: function() {
            return {
                items_stainless: info_stainless,
                items_steel: info_steel,
                items_zinc: info_zinc          
            }
        }
    }
</script>

<style lang="scss">
    .content-product-header {
        .hero-body {
            padding-bottom: 0;
        }
    }
    
    .content-product-main {
        background: url("/images/windmill.jpg") no-repeat center center;
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
    
    .modal {
        z-index: 1000;
        .modal-card-body {
            table {
                width: 100%;
            }
        }
    }
</style>
