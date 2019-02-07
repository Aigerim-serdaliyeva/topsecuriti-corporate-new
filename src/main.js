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
import StoryblokVue from "storyblok-vue";

// Global components
import BeginBg from "./components/BeginBg.vue";
import CtNav from "./components/CtNav.vue";

// Vue use
Vue.use(isMobile);
Vue.use(VueScrollTo);
Vue.use(StoryblokVue);

// Vue component
Vue.component("begin-bg", BeginBg);
Vue.component("ct-nav", CtNav);

// *** Storyblok
// Import pages
import Puge from "./components/Puge";

// Import Components
import Teaser from "./components/Teaser";

// Component
Vue.component("puge", Puge);
Vue.component("teaser", Teaser);

// *** /Storyblok
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
