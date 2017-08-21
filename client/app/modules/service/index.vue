<template lang="pug">
    div
        section.hero.is-fullheight.parallax.content-parallax
            .parallax-container
                .parallax
                    img(src="/images/service.jpeg")
            .hero-body
                .container.has-text-centered
                    h3.title.is-1.text-color-white <strong>บริการ</strong>
                    h4.subtitle.is-5.text-color-white ด้วยความรวดเร็วและความใส่ใจ
        section#tab-menu
            .tabs.is-fullwidth
                ul
                    li
                        a.tab-scroll(data-title="laser-cutting")
                            span.is-size-6 ตัดเลเซอร์
                    li
                        a.tab-scroll(data-title="plasma-cutting")
                            span.is-size-6 ตัดพลาสม่า
                    li
                        a.tab-scroll(data-title="metal-cutting")
                            span.is-size-6 ตัดเหล็ก
                    li
                        a.tab-scroll(data-title="fold")
                            span.is-size-6 พับ
                    li
                        a.tab-scroll(data-title="bend")
                            span.is-size-6 ม้วน
        section.hero.content-service-main
            .hero-body
                .container
                    .columns#laser-cutting
                        .column.is-narrow
                            img(src="/images/laser.jpg" alt="Laser cutting")
                        .column
                            .hero.is-fullheight
                                .hero-body
                                    .container
                                        h3.title.is-1 <strong>ตัดเลเซอร์</strong>
                                        h4.subtitle.is-5 สามารถตัดเหล็ก 1-8 มิลลิเมตร  </br>และตัดสเตนเลส 0.5-6 มิลลิเมตร 
                        .column.is-2.is-hidden-mobile
                    .columns#plasma-cutting
                        .column.is-2.is-hidden-mobile
                        .column.is-narrow.is-hidden-tablet
                            img(src="/images/plasma.jpg" atl="Plasma cutting")
                        .column
                            .hero.is-fullheight
                                .hero-body
                                    .container
                                        h3.title.is-1 <strong>ตัดพลาสม่า</strong>
                                        h4.subtitle.is-5   สามารถตัดเหล็ก 1-26 มิลลิเมตร </br>และตัด  สเตนเลส 0.5-16 มิลลิเมตร
                        .column.is-narrow.is-hidden-mobile
                            img(src="/images/plasma.jpg" atl="Plasma cutting")
                    .columns#metal-cutting
                        .column.is-narrow
                            img(src="/images/shearing.jpg" alt="Metal cutting")
                        .column
                            .hero.is-fullheight
                                .hero-body
                                    .container
                                        h3.title.is-1 <strong>ตัดเหล็ก</strong>
                                        h4.subtitle.is-5 สามารถตัดเหล็กความหนาสูงสุด 6 มิลลิเมตร </br>และตัด สเตนเลส 3 มิลลิเมตร </br>  ความยาวไม่เกิน 6 เมตร 
                        .column.is-2.is-hidden-mobile
                    .columns#fold
                        .column.is-2.is-hidden-mobile
                        .column.is-narrow.is-hidden-tablet
                            img(src="/images/folding.jpg" atl="Folding")
                        .column
                            .hero.is-fullheight
                                .hero-body
                                    .container
                                        h3.title.is-1 <strong>พับ</strong>
                                        h4.subtitle.is-5   พับเหล็กความหนาสูงสุด 8 มิลลิเมตร  </br> และพับสเตนเลสความหนาสูงสุด 4 มิลลิเมตร </br>  ความยาวไม่เกิน 6 เมตร
                        .column.is-narrow.is-hidden-mobile
                            img(src="/images/folding.jpg" atl="Folding")
                    .columns#bend
                        .column.is-narrow
                            img(src="/images/bending.jpg" alt="Bending")
                        .column
                            .hero.is-fullheight
                                .hero-body
                                    .container
                                        h3.title.is-1 <strong>ม้วน</strong>
                                        h4.subtitle.is-5 ม้วนเหล็กความหนาสูงสุด 3 มม.  </br>ความยาวไม่เกิน 3 เมตร 
                        .column.is-2.is-hidden-mobile  
</template>

<script>
export default {
    mounted: function () {
        $(document).ready(function () {
            $('.parallax').parallax();
        });
        $(window).scroll(function (e) {
            var heightCover = 400;
            var $el = $('#tab-menu');
            var isPositionFixed = ($el.css('position') == 'fixed');

            if ($(this).scrollTop() > heightCover && !isPositionFixed) {
                $('#tab-menu').css({
                    'position': 'fixed',
                    'top': heightNav
                });
                $('.content-service-main').css({
                    'padding-top': heightTab
                });
            }
            if ($(this).scrollTop() < heightCover && isPositionFixed) {
                $('#tab-menu').css({
                    'position': 'static',
                    'top': heightNav
                });
                $('.content-service-main').css({
                    'padding-top': 0
                });
            }
        });
        let heightNav = $('.navbar').height();
        let heightTab = $('.tabs').height();
        $(".tab-scroll").click(function () {
            let tab = $(this).attr("data-title");
            $('html, body').animate({
                scrollTop: $("#" + tab).offset().top - heightNav - heightTab
            }, 500);
        });
    }
}
</script>

<style lang="scss">
#tab-menu {
    width: 100%;
    z-index: 999;
    background-color: white;
}

.content-service-main {
    .container {
        @media(min-width: 1179px) {
            width: 60%;
        }
        img {
            @media(min-width: 768px) {
                width: 310px;
            }
            width: 100%;
            height: 360px;
            object-position: left;
            object-fit: cover;
        }
        .columns {
            .column {
                .hero {
                    min-height: 360px !important;
                }
            }
        }
    }
}
</style>
