<template lang="pug">
nav.navbar.nav-top.is-blue
    .container
        .navbar-brand
            router-link(tag="a" , to="/").navbar-item.is-hoverable
                img(src="~images/logo.png",alt="Utai Supply")
            .navbar-burger.is-blue(data-target="navMenu"  @click="active = !active" v-bind:class="{ 'is-active' : active }")
                span.is-white
                span.is-white
                span.is-white
        #navMenu.navbar-menu.is-blue(v-bind:class="{ 'is-active' : active }")
            .navbar-end
                router-link(tag="a" , to="/",@click.native="active = false").nav-item.is-hoverable.is-text-white หน้าหลัก
                router-link(tag="a" , to="/product",@click.native="active = false").nav-item.is-hoverable.is-text-white สินค้า
                router-link(tag="a" , to="/service",@click.native="active = false").nav-item.is-hoverable.is-text-white บริการ
                router-link(tag="a" , to="/portfolio",@click.native="active = false").nav-item.is-hoverable.is-text-white ผลงาน
                router-link(tag="a" , to="/contact",@click.native="active = false").nav-item.is-hoverable.is-text-white ติดต่อเรา
            .navbar-item.has-dropdown.is-hoverable
                .navbar-link.is-blue
                    img.flag(v-bind:src="getPathImage(languages[current].abbr)")
                    p.flag-title  {{languages[current].title}}
                .navbar-dropdown
                    template(v-for="(lang,index) in languages")
                        a.navbar-item(v-on:click="changeLang(index)")
                            .level.is-mobile
                                .level-left
                                    .level-item
                                        span
                                            img.flag(v-bind:src="getPathImage(lang.abbr)")
                                .level-right
                                    .level-item
                                        p {{lang.title}}
</template>

<script>
export default {
    data: function() {
        return {
            current: 0,
            languages: [
                {
                    abbr: "th",
                    title: "ไทย",
                }, {
                    abbr: "en",
                    title: "English",
                }
            ],
            active: false
        }
    },
    methods: {
        changeLang: function(indexLang) {
            this.current = indexLang;
            this.$i18n.locale = this.languages[this.current].abbr;
        },
        getPathImage: function(abbr) {
            return require('../../../../../images/flag/ic-' + abbr + '.svg');
        }
    }
}
</script>

<style lang="scss">
.navbar {
    z-index: 1000;
    min-height: 4.5rem !important;
    position: fixed !important;
    padding: 0px 4vw;
    left: 0;
    width: 100vw;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 10px 0 rgba(0, 0, 0, 0.05);
    .is-hoverable:hover {
        background-color: #1A2F61 !important;
    }
    .navbar-burger {
        min-height: 4.5rem !important;
    }
    .navbar-item {
        .flag {
            width: 25px;
            height: 25px;
            margin-right: 10px;
        }
        .flag-title{
            color: white;
        }
        .navbar-link {
            cursor: pointer;
            display: inline-flex !important;
        }
        .level-item{
            @media screen and (max-width: 768px){
                p{
                    color:white;
                }
            }
        }
        
    }
}
</style>
