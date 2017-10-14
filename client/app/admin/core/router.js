"use strict";

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../modules/home";
import Portfolio from "../modules/portfolio";

Vue.use(VueRouter);

export default new VueRouter({
	routes: [
		{ path: "/", component: Home },
		{ path: "/portfolio", component: Portfolio  }
	]
});

