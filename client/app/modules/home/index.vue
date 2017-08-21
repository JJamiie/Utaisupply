<template lang="pug">
div
  section.hero.is-fullheight.content-home-header
    .hero-body
      #slider-img.slider
        .slider-img
          img(src="/images/section1.jpg")
        .slider-img
          img(src="/images/section3.jpg")
        .slider-img
          img(src="/images/section4.jpg")
      .container.has-text-centered
        h3.title.is-text-header.text-color-white.noselect <strong>อุทัยซัพพลาย</strong>
        h4.subtitle.text-color-white.noselect.font-is-thin รับผลิต และจำหน่ายชิ้นงานโลหะทุกชนิด
  section.content-home-main
    .hero.container
      .hero-body
        h3.title.is-2.has-text-centered.noselect เกี่ยวกับเรา
        .line
        p &emsp; จากประสบการณ์กว่า 20 ปี ที่ได้ทำงานประกอบรถบัส รถบรรทุก กันชนและอะไหล่รถยนต์ เราจึงมีช่างที่มีประสบการณ์และ เครื่องมือหลากหลาย (เครื่องตัดเลเซอร์และพลาสม่า เครื่องตัดพับ เครื่องปั้มชิ้นงานฯ) ที่จะผลิดชิ้นงานให้กับลูกค้า อีกทั้งจำหน่ายเหล็ก และแสตนเลส - ท่อและแผ่นหจก. อุทัยซัพพลายบ้านโป่ง เป็นร้านจำหน่ายและติดตั้งอุปกรณ์ตกแต่งรถพิคอัพ และรถตู้ ครบวงจร โดยเฉพาะชุดตกแต่งภายนอก ที่มีการออกแบบทันสมัย แข็งแกร่ง ทนทาน มาตรฐานส่งออก สร้างชื่อเสียงเป็นที่รู้จักในเขตอำเภอบ้านโป่ง ภายในร้าน มีอุปกรณ์ตกแต่งรถพิคอัพและรถตู้ ให้เลือกมากมาย อาทิ กันชนหน้า/หลัง แรคหลังคา บันไดข้าง ที่ออกแบบได้อย่างสวยงาม มีความทนทานสูง จุดเด่นอยู่ที่รูปแบบสินค้า สวยงามไม่ซ้ำใคร ผลิตด้วยวัตถุดิบคุณภาพสูง มาตรฐานสินค
  section.hero.is-medium.content-parallax
    .parallax-container
      .parallax
        img(src="/images/section2.jpg")
</template>

<script>
export default {
  mounted: function () {
    $(document).ready(function () {
      $('.parallax').parallax();
      $('.slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4500
      });
    });
  }
}

</script>

<style lang="scss">
.content-home-header {
  min-height: 500px !important;
}

.content-home-main {
  width: 100%;
  .hero {
    width: 100%;
    max-width: 100%;
    background-color: white;
    .hero-body {
      @media(min-width: 768px) {
        padding: 6rem 7rem;
      }
      .title {
        margin-bottom: 0.6rem;
      }
      .content-about-image {
        width: 100%;
      }
    }
  }
}

.content-home-header {
  .hero-body {
    padding: 0px;
    .container {
      .subtitle {
        @media(min-width: 768px) {
          font-size: 1.8rem! important;
        }
        font-size: 1.2rem!important;
      }
    }
    .slider {
      width: 100%;
      height: 500px;
      overflow: hidden;
      position: absolute;
      .slider-img {
        img {
          object-fit: cover;
          height: 500px;
          width: 100%;
          filter: brightness(80%);
        }
      }
      .slick-prev {
        left: 25px;
        z-index: 10;
      }
      .slick-next {
        right: 25px;
        z-index: 10;
      }
      .slick-dots {
        bottom: 25px;
        z-index: 10;
        li {
          button:before {
            color: white;
            font-size: 10px;
          }
        }
      }
    }
  }
}
</style>
