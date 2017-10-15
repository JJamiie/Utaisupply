"use strict";

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../modules/home";
import Product from "../modules/product";
import Service from "../modules/service";
import Portfolio from "../modules/portfolio";
import Contact from "../modules/contact";

Vue.use(VueRouter);

let vuerouter = new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/product", component: Product },
    { path: "/service", component: Service },
    { path: "/portfolio", component: Portfolio },
    { path: "/contact", component: Contact }
  ]
});

vuerouter.beforeEach(function(to, from, next) {
  window.scrollTo(0, 0);
  next();
});

export default vuerouter;
