"use strict";

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../modules/home";
import Product from "../modules/product";
import Inventor from "../modules/inventor";
import News from "../modules/news";
import Event from "../modules/event/index.vue";

Vue.use(VueRouter);

export default new VueRouter({
	routes: [
		{ path: "/", component: Home },
		{ path: "/product", component: Product  },
		{ path: "/inventor", component: Inventor  },
		{ path: "/news", component: News  },
		{ path: "/event", component: Event  }
	]
});

