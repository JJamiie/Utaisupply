<template lang="pug">
div
    nav.navbar.nav-top.is-blue
        .container
            .navbar-brand
                .navbar-burger(data-target="navMenu")
                    span.is-white
                    span.is-white
                    span.is-white
            #navMenu.navbar-menu
                .navbar-end
                    a.navbar-item.is-hoverable.is-text-white(href="/admin/logout") Logout
    section.hero.is-info 
        .hero-body
            .container
                .title Settings
                .subtitle Everything you need CMIC website to be
        .hero-foot
            nav.tabs
                .container
                    ul
                        router-link(tag="li" , to="/") 
                            a Home
                        router-link(tag="li" , to="/inventor") 
                            a Inventor
                        router-link(tag="li" , to="/product") 
                            a Products
                        router-link(tag="li" , to="/news") 
                            a News
                        router-link(tag="li" , to="/event") 
                            a Events
   
</section>  
</template>

<script>
export default {
    name: "page-header",
    created: function() { },
    mounted: function() {
        document.addEventListener("DOMContentLoaded", function() {
            // Get all "navbar-burger" elements
            var $navbarBurgers = Array.prototype.slice.call(
                document.querySelectorAll(".navbar-burger"),
                0
            );

            // Check if there are any nav burgers
            if ($navbarBurgers.length > 0) {
                // Add a click event on each of them
                $navbarBurgers.forEach(function($el) {
                    $el.addEventListener("click", function() {
                        // Get the target from the "data-target" attribute
                        var target = $el.dataset.target;
                        var $target = document.getElementById(target);

                        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                        $el.classList.toggle("is-active");
                        $target.classList.toggle("is-active");
                    });
                });
            }
        });
    },
    data: function() {
        return {}
    },
    methods: {

    }
};
</script>

<style lang="scss">
nav {
    .navbar-item:hover {
        background-color: rgba(0, 0, 0, 0.2) !important;
        .flag-title {
            @media screen and (min-width: 1008px) {
                color: gray !important;
            }
        }
    }
}
</style>