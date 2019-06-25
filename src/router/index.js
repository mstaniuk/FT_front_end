import Vue from "vue";
import Router from "vue-router";
import VueMeta from "vue-meta";

import routes from "./routes";

Vue.use(Router);

Vue.use(VueMeta, {
  keyName: "page"
});

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
