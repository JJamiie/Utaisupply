<template lang="pug">
.portfolio
    .portfolio-container.is-blue
        .btn-close(@click="$emit('close')")
            i.fa.fa-times.is-text-white
        .columns.is-gapless
            .column.portfolio-image.is-7-tablet.is-8-desktop.is-grey-light
                carousel(v-if="portfolio.image.length !== 0" v-bind:autoplay="true" v-bind:loop="true" v-bind:perPage="1" v-bind:navigationEnabled="true" v-bind:paginationEnabled="true" v-bind:autoplayHoverPause="true" v-bind:autoplayTimeout="3000")
                    slide(v-for="(img,index) in portfolio.image" v-bind:key="img")
                        img(:src="img")
            .column.portfolio-content.is-5-tablet.is-4-desktop
                .bg-content.is-blue
                .content.is-white
                    h4.title.is-size-3 {{portfolio.translations.find(obj => obj.language === $i18n.locale).title}}
                    p.tag.is-primary.is-small {{portfolio.category.translations.find(obj => obj.language === $i18n.locale).name}} 
                    p.is-font-thin.is-size-6.detail {{portfolio.translations.find(obj => obj.language === $i18n.locale).detail}}
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
    props: {
        portfolio: {
            Object
        }
    },
    components: {
        Carousel,
        Slide
    }
}
</script>

<style lang="scss">
.portfolio {
    top: 0px;
    left: 0px;
    position: fixed;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    padding: 40px;
    @media screen and (max-width: 768px) {
        padding: 20px;
        overflow: scroll;
    }
    background: rgba(0, 0, 0, 0.59);
    .portfolio-container {
        position: relative;
        width: 100%;
        padding: 20px;
        min-height: 100%;
        @media screen and (min-width: 769px) {
            padding: 40px;
            height: 100%;
        }

        .btn-close {
            position: absolute;
            right: 0px;
            top: 0px;
            margin: 10px;
            cursor: pointer;
        }
        .columns {
            width: 100%;
            height: 100%;
            @media screen and (max-width: 768px) {
                padding: 60px 20px 0px 20px;
            }
            padding: 4vh 0vw 0vh 5vw;
            .portfolio-image {
                height: 100%;
                overflow: hidden;
                @media screen and (max-width: 768px) {
                    height: 40vh;
                }
                position: relative;
                .VueCarousel {
                    height: 100%;
                    .VueCarousel-wrapper {
                        height: 100%;
                        .VueCarousel-inner {
                            height: 100%;
                            .VueCarousel-slide {
                                height: 100%;
                                img {
                                    width: 100%;
                                    height: 100%;
                                    object-fit: cover;
                                }
                            }
                        }
                    }
                    .VueCarousel-navigation {
                        .VueCarousel-navigation-button {
                            color: rgba(255, 255, 255, 0.7);
                            font-size: 1.2rem;
                        }
                        .VueCarousel-navigation-prev {
                            @media screen and (max-width: 768px) {
                                margin-left: 48px;
                            }
                            margin-left: 8%;
                        }
                        .VueCarousel-navigation-next {
                            @media screen and (max-width: 768px) {
                                margin-right: 48px;
                            }
                            margin-right: 18%;
                        }
                    }
                    .VueCarousel-pagination {
                        margin-top: -60px;
                        opacity: 0.5;
                    }
                }
            }
            .portfolio-content {
                position: relative;
                @media screen and (min-width: 769px) {
                    left: -5vw;
                    margin: 7vh 0;
                }

                .content {
                    width: 100%;
                    @media screen and (min-width: 769px) {
                        position: absolute;
                        height: 100%;
                        overflow: none;
                        margin-bottom: 0px;
                    }
                    overflow: auto;
                    padding: 50px !important;
                    .title {
                        margin-bottom: 5px;
                    }
                    p {
                        margin-bottom: 10px;
                    }
                    .is-border-grey {
                        border-width: 0.7px;
                        border-style: solid;
                        border-color: grey;
                        background-color: transparent;
                    }
                    .detail {
                        white-space: pre-line;
                    }
                }
                .bg-content {
                    @media screen and (min-width: 769px) {
                        position: absolute;
                        height: 100%;
                        width: 100%;
                        left: -1.5vw;
                        top: 1.5vw;
                    }
                }
            }
        }
    }
}
</style>
