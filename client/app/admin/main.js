"use strict";

import Vue from "vue";
import App from "./core/App";
import router from "./core/router.js";
import store from "./core/store.js";

// Setting axios
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.baseURL = "/api/";

// Global Component
import TabChooseLanguage from "./core/components/TabChooseLanguage.vue";
import InputFile from "./core/components/InputFile.vue";

Vue.component("tab-choose-language", TabChooseLanguage);
Vue.component("input-file", InputFile);

import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

new Vue({
  components: {
    App
  },
  router,
  store,
  render: h => h("app")
}).$mount("#app");
