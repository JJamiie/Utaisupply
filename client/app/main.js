"use strict";

import Vue from "vue";
import axios from "axios";
axios.defaults.headers.post["Content-Type"] = "application/json";

import App from "./core/App";
import router from "./core/router.js";


new Vue({
    el: "#app",
    router,
    components: {
        App
    },
    render: h => h("app")
});

