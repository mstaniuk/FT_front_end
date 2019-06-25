import List from "../views/List.vue";

export default [
  {
    path: "/list/:page?",
    alias: "/:page?",
    name: "list",
    component: List
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];
