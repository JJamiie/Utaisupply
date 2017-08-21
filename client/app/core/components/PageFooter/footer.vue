<template lang="pug">
    footer.footer
        .container
          .content.has-text-centered
            p.icon
              a.mar-right(href="https://www.facebook.com/utaisupply/" target='_blank')
                i.fa.fa-facebook-square
              a.mar-right(href="tel:032353887")
                i.fa.fa-phone
              a.mar-right#mail
                i.fa.fa-envelope
              a(href="http://line.me/ti/p/~utaisupply")
                i.fa.fa-commenting
            p.is-size-5 ยินดีต้อนรับสู่ บริษัทอุทัยซัพพลาย จำกัด </br> Welcome to Utai Supply

</template>

<script>
    $(document).ready(function() {
        $('#mail').on('click', function() {
            window.location.href = "mailto:utaisupply@gmail.com?subject=Subject&body=message%20goes%20here";
        });
    });
</script>

<style lang="scss" scoped>
    .footer {
        position: relative;
        .icon {
            a {
                .fa {
                    font-size: 1.5rem !important;
                    margin-right: 18px;
                }
            }
        }
    }
</style>
