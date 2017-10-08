"use strict";

import Vue from "vue";

import App from "./core/App";
import router from "./core/router.js";

// Init locales
import VueI18n from "vue-i18n";
Vue.use(VueI18n);
import LocaleEN from "./core/locales/en.json";
import LocaleTH from "./core/locales/th.json";

// Setting axios
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.baseURL = "/api/";

import VuePreventParentScroll from "vue-prevent-parent-scroll";

Vue.use(VuePreventParentScroll);

import VueParallaxJs from 'vue-parallax-js';
Vue.use(VueParallaxJs);

import Footer from "./core/components/PageFooter/footer";
const PageFooter = {
  install(Vue, options) {
    Vue.component("page-footer", Footer);
  }
};

Vue.use(PageFooter);

import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyBFqd7t73IqVTF2oyQ6wLV6B2zqjKOo0so',
    }
});

const i18n = new VueI18n({
  locale: "th",
  fallbackLocale: "th",
  messages: {
    th: {
      msg: LocaleTH
    },
    en: {
      msg: LocaleEN
    }
  }
});

new Vue({
  components: {
    App
  },
  router,
  i18n,
  render: h => h("app")
}).$mount("#app");


