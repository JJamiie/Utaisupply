<template lang="pug">
    div
        PageHeader
        .content-main
            transition(name="fade")
                router-view
            PageFooter
</template>

<script>
import Vue from "vue";
import PageHeader from "./components/PageHeader/header"
import PageFooter from "./components/PageFooter/footer"

export default {
    components: {
        PageHeader,
        PageFooter
    },
    mounted: function () {
        document.addEventListener('DOMContentLoaded', function () {

            // Get all "navbar-burger" elements
            var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

            // Check if there are any nav burgers
            if ($navbarBurgers.length > 0) {

                // Add a click event on each of them
                $navbarBurgers.forEach(function ($el) {
                    $el.addEventListener('click', function () {

                        // Get the target from the "data-target" attribute
                        var target = $el.dataset.target;
                        var $target = document.getElementById(target);

                        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                        $el.classList.toggle('is-active');
                        $target.classList.toggle('is-active');

                    });
                });
            }

        });
    }
};


</script>

<style lang="scss">
.content-main {
    position: relative;
    top: 3.25rem;
}
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.5s ease;
}
</style>

