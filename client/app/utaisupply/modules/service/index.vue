<template lang="pug">
    div
        section.hero.is-medium.header-service
            img(src="~images/service.jpg")
            .hero-body
                .container.has-text-centered
                    h3.title.is-text-white <strong>{{$t("msg.services_title")}}</strong>
                    h4.subtitle.is-size-5.is-text-white {{$t("msg.services_subtitle")}}
        section.tab-menu
            .tabs.is-fullwidth
                ul
                    li
                        a.tab-scroll(data-title="laser-cutting" v-scroll-to="'#laser-cutting'")
                            span.is-size-6 {{$t("msg.laser_cutting")}}
                    li
                        a.tab-scroll(data-title="plasma-cutting" v-scroll-to="'#plasma-cutting'")
                            span.is-size-6 {{$t("msg.plasma_cutting")}}
                    li
                        a.tab-scroll(data-title="metal-cutting" v-scroll-to="'#metal-cutting'")
                            span.is-size-6 {{$t("msg.metal_cutting")}}
                    li
                        a.tab-scroll(data-title="fold" v-scroll-to="'#fold'")
                            span.is-size-6 {{$t("msg.fold")}}
                    li
                        a.tab-scroll(data-title="bend" v-scroll-to="'#bend'")
                            span.is-size-6 {{$t("msg.bend")}}
        section.hero.content-service-main
            .hero-body
                .container
                    .columns#laser-cutting
                        .column.is-narrow
                            img(src="~images/laser.jpg" alt="Laser cutting")
                        .column
                            .hero.is-fullheight
                                .hero-body
                                    .container.has-text-centered-mobile
                                        h3.title.is-size-2 <strong>{{$t("msg.laser_cutting")}}</strong>
                                        h4.subtitle.is-size-5.is-size-6-mobile {{$t("msg.laser_cutting_subtitle")}}
                    .columns#plasma-cutting
                        .column.is-1.is-hidden-mobile
                        .column.is-narrow.is-hidden-tablet
                            img(src="~images/plasma.jpg" atl="Plasma cutting")
                        .column
                            .hero.is-fullheight
                                .hero-body
                                    .container.has-text-centered-mobile
                                        h3.title.is-size-2 <strong>{{$t("msg.plasma_cutting")}}</strong>
                                        h4.subtitle.is-size-5.is-size-6-mobile {{$t("msg.plasma_cutting_subtitle")}}
                        .column.is-narrow.is-hidden-mobile
                            img(src="~images/plasma.jpg" atl="Plasma cutting")
                    .columns#metal-cutting
                        .column.is-narrow
                            img(src="~images/shearing.jpg" alt="Metal cutting")
                        .column
                            .hero.is-fullheight
                                .hero-body
                                    .container.has-text-centered-mobile
                                        h3.title.is-size-2 <strong>{{$t("msg.metal_cutting")}}</strong>
                                        h4.subtitle.is-size-5.is-size-6-mobile {{$t("msg.metal_cutting_subtitle")}}
                        .column.is-1.is-hidden-mobile
                    .columns#fold
                        .column.is-1.is-hidden-mobile
                        .column.is-narrow.is-hidden-tablet
                            img(src="~images/folding.jpg" atl="Folding")
                        .column
                            .hero.is-fullheight
                                .hero-body
                                    .container.has-text-centered-mobile
                                        h3.title.is-size-2 <strong>{{$t("msg.fold")}}</strong>
                                        h4.subtitle.is-size-5.is-size-6-mobile {{$t("msg.fold_subtitle")}}
                        .column.is-narrow.is-hidden-mobile
                            img(src="~images/folding.jpg" atl="Folding")
                    .columns#bend
                        .column.is-narrow
                            img(src="~images/bending.jpg" alt="Bending")
                        .column
                            .hero.is-fullheight
                                .hero-body
                                    .container.has-text-centered-mobile
                                        h3.title.is-size-2 <strong>{{$t("msg.bend")}}</strong>
                                        h4.subtitle.is-size-5.is-size-6-mobile {{$t("msg.bend_subtitle")}}
                        .column.is-1.is-hidden-mobile  
        page-footer
</template>

<script>
export default {
    mounted: function() {

    }
}
</script>

<style lang="scss" scoped>
.header-service {
    position: relative;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
    }
}

.tab-menu {
    width: 100%;
    z-index: 999;
    background-color: white;
}

.content-service-main {
    .container {
        @media screen and (min-width: 1179px) {
            width: 60%;
        }
        img {
            @media screen and (min-width: 768px) {
                width: 310px;
                height: 360px;
            }
            width: 100%;
            height: 300px;
            object-position: left;
            object-fit: cover;
        }
        .columns {
            .column {
                .hero {
                    @media screen and (max-width: 768px) {
                        min-height: 300px !important;
                    }
                    min-height: 360px !important;
                }
            }
            .subtitle{
                white-space:pre-wrap;
            }
        }
    }
}
</style>
