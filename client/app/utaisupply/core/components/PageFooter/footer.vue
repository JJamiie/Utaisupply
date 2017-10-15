<template lang="pug">

    footer.footer.is-blue
        .container
            .columns
                .column.is-offset-2-desktop
                    .title.is-text-white.is-uppercase {{$t("msg.contact_title")}}
                    p.is-text-white {{$t("msg.address")}}
                    p.is-text-white {{$t("msg.tel")}} : (66) 32 353 887
                    p.is-text-white {{$t("msg.fax")}} : (66) 32 353 359
                .column
                    .title.is-text-white.is-uppercase {{$t("msg.social_media")}}
                    .columns.is-mobile.is-2
                        .column.is-narrow
                            a(href="https://www.facebook.com/utaisupply/" target='_blank')
                                img.social(src="~images/facebook.svg")  
                        .column.is-narrow
                            a(href="http://line.me/ti/p/~utaisupply")
                                img.social(src="~images/line.svg")
                        .column.is-narrow
                            a(href="tel:032353887")
                                img.social(src="~images/phone.svg") 
                        .column.is-narrow
                            a(href="mailto:utaisupply@gmail.com?subject=Subject&body=message%20goes%20here")
                                img.social(src="~images/mail.svg")                        
</template>

<script>
export default {
    name: 'page-footer'
}
</script>

<style lang="scss">
.footer {
    background-size: cover;
    position: relative;
    background-color: initial;
    padding: 3rem 1.4rem 3rem 1.4rem;
    .social {
        width: 50px;
        height: 50px;
    }
}
</style>

