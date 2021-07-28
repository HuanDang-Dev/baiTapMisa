import Vue from "vue";
import Router from "vue-router";
import Home from "./views/ThePage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/employee",
      name: "employee",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/employee/index.vue"),
    },
  ],
});
