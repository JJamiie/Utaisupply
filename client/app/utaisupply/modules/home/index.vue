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
        h3.title.is-size-1.is-text-white.noselect <strong>อุทัยซัพพลาย</strong>
        h4.subtitle.is-text-white.noselect.is-font-light รับผลิต และจำหน่ายชิ้นงานโลหะทุกชนิด
  section.content-home-main.is-white
    .hero.container
      .hero-body
        h3.title.is-2.has-text-centered.noselect เกี่ยวกับเรา
        .line
        p &emsp; จากประสบการณ์กว่า 20 ปี ที่ได้ทำงานประกอบรถบัส รถบรรทุก กันชนและอะไหล่รถยนต์ เราจึงมีช่างที่มีประสบการณ์และ เครื่องมือหลากหลาย (เครื่องตัดเลเซอร์และพลาสม่า เครื่องตัดพับ เครื่องปั้มชิ้นงานฯ) ที่จะผลิดชิ้นงานให้กับลูกค้า อีกทั้งจำหน่ายเหล็ก และแสตนเลส - ท่อและแผ่นหจก. อุทัยซัพพลายบ้านโป่ง เป็นร้านจำหน่ายและติดตั้งอุปกรณ์ตกแต่งรถพิคอัพ และรถตู้ ครบวงจร โดยเฉพาะชุดตกแต่งภายนอก ที่มีการออกแบบทันสมัย แข็งแกร่ง ทนทาน มาตรฐานส่งออก สร้างชื่อเสียงเป็นที่รู้จักในเขตอำเภอบ้านโป่ง ภายในร้าน มีอุปกรณ์ตกแต่งรถพิคอัพและรถตู้ ให้เลือกมากมาย อาทิ กันชนหน้า/หลัง แรคหลังคา บันไดข้าง ที่ออกแบบได้อย่างสวยงาม มีความทนทานสูง จุดเด่นอยู่ที่รูปแบบสินค้า สวยงามไม่ซ้ำใคร ผลิตด้วยวัตถุดิบคุณภาพสูง มาตรฐานสินค
  section.content-home-footer
    img(src="~images/section2.jpg" v-parallax="0.2")
  page-footer
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
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
  min-height: 300px;
  img {
    width: 100%;
    position: absolute;
    @media screen and (min-width: 769px) {
      top: -200px;
    }
    filter: brightness(0.9);
  }
}
</style>
