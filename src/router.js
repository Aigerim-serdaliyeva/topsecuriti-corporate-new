import Vue from "vue";
import Router from "vue-router";
import Meta from "vue-meta";
import Article from "./views/Article";
import Home from "./views/Home";
const router = new Router({
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
      path: "/partners",
      name: "partners",
      component: () => import("./views/Partners.vue")
    },
    {
      path: "/contacts",
      name: "contacts",
      component: () => import("./views/Contacts.vue")
    },
    {
      path: "/services",
      name: "services",
      component: () => import("./views/Services.vue")
    },
    {
      path: "/article",
      name: "article",
      component: Article
    }
  ]
});

Vue.use(Router);
Vue.use(Meta);

export default router;
