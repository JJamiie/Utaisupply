<template lang="pug">
nav.navbar.primary-color.nav-top
      .navbar-brand
        a.navbar-item.is-hoverable
          img(src="/images/logo.png",alt="Utai Supply")
        .navbar-burger.primary-color(data-target="navMenu")
          span.white-color
          span.white-color
          span.white-color
      #navMenu.navbar-menu.primary-color
        .navbar-end
          router-link(tag="a" , to="/").nav-item.is-hoverable.text-is-white หน้าหลัก
          router-link(tag="a" , to="/product").nav-item.is-hoverable.text-is-white สินค้า
          router-link(tag="a" , to="/service").nav-item.is-hoverable.text-is-white บริการ
          router-link(tag="a" , to="/portfolio").nav-item.is-hoverable.text-is-white ผลงาน
          router-link(tag="a" , to="/contact").nav-item.is-hoverable.text-is-white ติดต่อเรา
</template>

<script>
export default {

}
</script>

<style lang="scss">
.nav-top {
  position: fixed !important;
  left: 0;
  width: 100vw;
  padding: 0 45px;
  z-index: 1000;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 10px 0 rgba(0, 0, 0, 0.05);
}
</style>
