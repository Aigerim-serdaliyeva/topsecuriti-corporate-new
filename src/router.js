import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Meta from "vue-meta";

Vue.use(Router);
Vue.use(Meta);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/products",
      name: "products",
      component: () =>
        import(/* webpackChunkName: "products" */ "./views/Products.vue")
    },
    {
      path: "/news",
      name: "news",
      component: () => import(/* webpackChunkName: "news" */ "./views/News.vue")
    },
    {
      path: "/partners",
      name: "partners",
      component: () =>
        import(/* webpackChunkName: "partners" */ "./views/Partners.vue")
    },
    {
      path: "/contacts",
      name: "contacts",
      component: () =>
        import(/* webpackChunkName: "contacts" */ "./views/Contacts.vue")
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});
