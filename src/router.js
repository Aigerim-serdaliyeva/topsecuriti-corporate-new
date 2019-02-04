import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Meta from "vue-meta";

Vue.use(Router);
Vue.use(Meta);

export default new Router({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/products",
      name: "products",
      component: () => import("./views/Products.vue")
    },
    {
      path: "/news",
      name: "news",
      component: () => import("./views/News.vue")
    },
    {
      path: "/news/post/:id",
      name: "posts",
      component: () => import("./views/News.vue")
    },
    {
      path: "/partners",
      name: "partners",
      component: () => import("./views/Partners.vue")
    },
    {
      path: "/contacts",
      name: "contacts",
      component: () => import("./views/Contacts.vue")
    }
  ]
});
