<template lang="pug">
    div
        section.hero.header-contact.is-medium
            .hero-body
                img(src="~images/contact.jpg" v-parallax="0.2")
                .container.has-text-centered
                    h3.title.is-1.is-text-white <strong>ติดต่อเรา</strong>
                    h4.subtitle.is-5.is-text-white เปิดบริการ วันจันทร์ - เสาร์ เวลา 8.00 น. ถึง 17.00 น. 
        section.content-contact-main
            .hero.container
                .card
                    .hero-body
                        .columns
                            .column
                                template
                                    gmap-map(v-bind:center="center" v-bind:zoom="16").map
                                        gmap-marker(v-bind:key="index"
                                        v-for="(m, index) in markers"
                                        v-bind:position="m.position"
                                        v-bind:clickable="true"
                                        v-bind:draggable="true"
                                        v-on:click="center=m.position")
                            .column.contact-info
                                .columns
                                    .column.is-narrow.content
                                        i.fa.fa-map-marker.fa-lg
                                    .column.content
                                        p 18/1 หมู่ 11 ตำบลหนองอ้อ อำเภอบ้านโป่ง จังหวัดราชบุรี 70110 
                                .columns
                                    .column.is-narrow.content
                                        i.fa.fa-phone.fa-lg
                                    .column.content
                                        p (66) 32 353 887
                                .columns
                                    .column.is-narrow.content
                                        i.fa.fa-mobile.fa-2x
                                    .column.content
                                        p (66) 97 269 6441, (66) 97 267 5704
                                .columns
                                    .column.is-narrow.content
                                        i.fa.fa-fax.fa-lg
                                    .column.content
                                        p (66) 32 353 359
                                .columns
                                    .column.is-narrow.has-text-centered
                                        i.fa.fa-envelope.fa-lg
                                    .column.content
                                        p utaisupply@hotmail.com, utaisupply@gmail.com

</template>

<script>

let uluru = {
    lat: 13.793172219614723,
    lng: 99.9267553165555
};
export default {
    mounted: function() {
        
    },
    data: function() {
        return {
            center: uluru,
            markers: [{
                position: uluru
            }]
        }
    }
}
</script>

<style lang="scss" scoped>
.header-contact {
    position: relative;
    overflow: hidden;
    img {
        width: 100%;
        object-fit: cover;
        position: absolute;
        left: 0px;
        top: -200px;
        @media screen and (max-width: 768px) {
            top:-100px;
        }
    }
}

.content-contact-header {
    background-image: url("~images/contact.jpg");
}

.content-contact-main {
    @media(min-width: 768px) {
        position: relative;
        top: -3.45rem;
    }
    .hero {
        .hero-body {
            padding: 44px;
            .map {
                width: 100%;
                height: 400px;
                background-color: grey;
            }
            .contact-info {
                .is-narrow {
                    margin-bottom: 0;
                }
                @media(max-width: 768px) {
                    .content {
                        text-align: center;
                    }
                }
            }
        }
    }
}
</style>
