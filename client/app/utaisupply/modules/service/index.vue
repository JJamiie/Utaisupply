<template lang="pug">
    div
        section.hero.is-medium.header-service
            .hero-body
                img(src="~images/service.jpg" v-parallax="0.2")
                .container.has-text-centered
                    h3.title.is-size-1.is-text-white <strong>บริการ</strong>
                    h4.subtitle.is-size-5.is-text-white ด้วยความรวดเร็วและความใส่ใจ
        section#tab-menu
            .tabs.is-fullwidth
                ul
                    li
                        a.tab-scroll(data-title="laser-cutting" v-scroll-to="'#laser-cutting'")
                            span.is-size-6 ตัดเลเซอร์
                    li
                        a.tab-scroll(data-title="plasma-cutting" v-scroll-to="'#plasma-cutting'")
                            span.is-size-6 ตัดพลาสม่า
                    li
                        a.tab-scroll(data-title="metal-cutting" v-scroll-to="'#metal-cutting'")
                            span.is-size-6 ตัดเหล็ก
                    li
                        a.tab-scroll(data-title="fold" v-scroll-to="'#fold'")
                            span.is-size-6 พับ
                    li
                        a.tab-scroll(data-title="bend" v-scroll-to="'#bend'")
                            span.is-size-6 ม้วน
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
                                        h3.title.is-size-1.is-size-2-mobile <strong>ตัดเลเซอร์</strong>
                                        h4.subtitle.is-size-5.is-size-6-mobile สามารถตัดเหล็ก 1-8 มิลลิเมตร  </br>และตัดสเตนเลส 0.5-6 มิลลิเมตร 
                        .column.is-1.is-hidden-mobile
                    .columns#plasma-cutting
                        .column.is-1.is-hidden-mobile
                        .column.is-narrow.is-hidden-tablet
                            img(src="~images/plasma.jpg" atl="Plasma cutting")
                        .column
                            .hero.is-fullheight
                                .hero-body
                                    .container.has-text-centered-mobile
                                        h3.title.is-size-1.is-size-2-mobile <strong>ตัดพลาสม่า</strong>
                                        h4.subtitle.is-size-5.is-size-6-mobile   สามารถตัดเหล็ก 1-26 มิลลิเมตร </br>และตัด  สเตนเลส 0.5-16 มิลลิเมตร
                        .column.is-narrow.is-hidden-mobile
                            img(src="~images/plasma.jpg" atl="Plasma cutting")
                    .columns#metal-cutting
                        .column.is-narrow
                            img(src="~images/shearing.jpg" alt="Metal cutting")
                        .column
                            .hero.is-fullheight
                                .hero-body
                                    .container.has-text-centered-mobile
                                        h3.title.is-size-1.is-size-2-mobile <strong>ตัดเหล็ก</strong>
                                        h4.subtitle.is-size-5.is-size-6-mobile สามารถตัดเหล็กความหนาสูงสุด 6 มิลลิเมตร </br>และตัด สเตนเลส 3 มิลลิเมตร </br>  ความยาวไม่เกิน 6 เมตร 
                        .column.is-1.is-hidden-mobile
                    .columns#fold
                        .column.is-1.is-hidden-mobile
                        .column.is-narrow.is-hidden-tablet
                            img(src="~images/folding.jpg" atl="Folding")
                        .column
                            .hero.is-fullheight
                                .hero-body
                                    .container.has-text-centered-mobile
                                        h3.title.is-size-1.is-size-2-mobile <strong>พับ</strong>
                                        h4.subtitle.is-size-5.is-size-6-mobile พับเหล็กความหนาสูงสุด 8 มิลลิเมตร </br> และพับสเตนเลสความหนาสูงสุด 4 มิลลิเมตร </br>ความยาวไม่เกิน 6 เมตร
                        .column.is-narrow.is-hidden-mobile
                            img(src="~images/folding.jpg" atl="Folding")
                    .columns#bend
                        .column.is-narrow
                            img(src="~images/bending.jpg" alt="Bending")
                        .column
                            .hero.is-fullheight
                                .hero-body
                                    .container.has-text-centered-mobile
                                        h3.title.is-size-1.is-size-2-mobile <strong>ม้วน</strong>
                                        h4.subtitle.is-size-5.is-size-6-mobile ม้วนเหล็กความหนาสูงสุด 3 มม.  </br>ความยาวไม่เกิน 3 เมตร 
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
#tab-menu {
    width: 100%;
    z-index: 999;
    background-color: white;
}

.header-service {
    position: relative;
    overflow: hidden;
    img {
        width: 100%;
        object-fit: cover;
        position: absolute;
        left: 0px;
        top: -150px;
        @media screen and (max-width: 768px) {
            top:-100px;
        }
    }
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
        }
    }
}
</style>
