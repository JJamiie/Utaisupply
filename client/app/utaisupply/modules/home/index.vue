<template lang="pug">
div
  section.hero.is-large.content-home-header
    .hero-body
      carousel(v-bind:autoplay="true" v-bind:loop="true" v-bind:perPage="1" v-bind:navigationEnabled="true" v-bind:paginationEnabled="false" v-bind:autoplayHoverPause="true")
        slide
          img(src="~images/section1.jpg")
        slide
          img(src="~images/section3.jpg")
        slide
          img(src="~images/section4.jpg")
      .container.has-text-centered
        h3.title.is-font-bold.is-size-1.is-size-2-mobile.is-text-white.noselect <strong>{{$t("msg.utaisupply_title")}}</strong>
        h4.subtitle.is-size-5.is-size-6-mobile.is-text-white.noselect.is-font-light {{$t("msg.utaisupply_subtitle")}}
  section.content-home-main.is-white
    .hero.container
      .hero-body
        h3.title.is-2.has-text-centered.noselect {{$t("msg.about_us")}}
        .line
        p &emsp; {{$t("msg.about_us_detail")}}
  section.content-home-footer
    img(src="~images/section2.jpg")
  page-footer
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import Vue from 'vue';
import VueParallaxJs from 'vue-parallax-js';
Vue.use(VueParallaxJs);

export default {
  components: {
    Carousel,
    Slide
  }
}

</script>

<style lang="scss" scoped>
.content-home-header {
  .hero-body {
    .title {
      letter-spacing: 5px;
    }
    position: relative;
    .VueCarousel {
      position: absolute;
      height: 100%;
      top: 0;
      left: 0;
      .VueCarousel-slide {
        img {
          filter: brightness(0.7);
        }
      }
    }
  }
}

.content-home-main {
  position: relative;
  z-index: 1;
  .hero {
    .hero-body {
      @media(min-width: 768px) {
        padding: 6rem 7rem;
      }
    }
  }
}

.content-home-footer {
  position: relative;
  overflow: hidden;
  @media screen and (min-width: 769px) {
    min-height: 500px;
  }
  min-height: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    filter: brightness(0.9);
  }
}
</style>
