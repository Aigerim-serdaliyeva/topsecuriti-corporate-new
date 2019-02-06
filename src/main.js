import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

// Plugins
import { i18n } from "./i18n";
import VueScrollTo from "vue-scrollto";
import "./plugins/modernizr";
import "./plugins/scrollmagic";
import isMobile from "./plugins/isMobile";

// Global components
import BeginBg from "./components/BeginBg.vue";
import CtNav from "./components/CtNav.vue";

// Vue use
Vue.use(isMobile);
Vue.use(VueScrollTo);

Vue.component("begin-bg", BeginBg);
Vue.component("ct-nav", CtNav);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
