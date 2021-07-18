import Vue from "vue";
import Router from "vue-router";
import Home from "./views/TheEmployee.vue";

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
      path: "/customer",
      name: "customer",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/TheHeader.vue"),
    },
  ],
});