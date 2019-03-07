import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

// *** Plugins
import "./plugins/modernizr";
import "./plugins/siema";
// *** /Plugins

// *** Mixins
import { isMobile } from "./mixins/isMobile";

Vue.mixin(isMobile);
// *** /Mixins

// *** Vue use
Vue.use(VueMask);
// *** /Vue use

import VueMask from "v-mask";
Vue.use(VueMask);

// *** Global components
import CtNav from "./components/CtNav.vue";
import MobileHeader from "@/components/MobileHeader";

Vue.component("ct-nav", CtNav);
Vue.component("mobile-header", MobileHeader);
// *** /Global components

// *** Storyblok

// *** /Storyblok
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
