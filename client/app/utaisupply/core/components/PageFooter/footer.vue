<template lang="pug">

    footer.footer.is-blue
        .container
            .columns
                .column.is-offset-2-desktop
                    .title.is-text-white.is-uppercase ติดต่อเรา
                    p.is-text-white 18/1 หมู่ 11 ตำบลหนองอ้อ อำเภอบ้านโป่ง จังหวัดราชบุรี 70110 
                    p.is-text-white โทร: (66) 32 353 887
                    p.is-text-white แฟกซ์: (66) 32 353 359
                .column
                    .title.is-text-white.is-uppercase โซเชียลมีเดีย
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

