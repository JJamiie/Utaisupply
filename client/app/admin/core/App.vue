<template lang="pug">
    div
        PageHeader
        .content-main
            transition(name="fade")
                keep-alive
                    router-view
            
</template>

<script>
    import Vue from "vue";
    import PageHeader from "./components/PageHeader/header"
    export default {
        components: {
            PageHeader,
        },
        mounted: function() {
            
        }
    };
</script>

<style lang="scss">
    .fade-enter {
        opacity: 0;
    }
    
    .fade-enter-active {
        transition: opacity 0.5s ease;
    }
    .content-main{
        overflow-x: hidden;
    }
</style>

