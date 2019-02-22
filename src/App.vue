<template lang="pug">
    div
        div(id="app", v-if="true")
            <ct-menu />
            <router-view />
            <ct-footer class="dark-footer" />
        div(v-if="false")
            site-off
</template>

<style lang="scss">
html {
  font-family: Spectral-regular, Sans-Serif;
}
@import "./assets/scss/style.scss";
</style>

<script>
import CtMenu from "./components/CtMenu.vue";
import CtFooter from "./components/CtFooter.vue";
import SiteOff from "./components/SiteOff.vue";

export default {
  components: {
    CtMenu,
    CtFooter,
    SiteOff
  }
};
</script>
