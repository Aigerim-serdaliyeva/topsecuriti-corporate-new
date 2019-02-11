<template>
  <div id="app">
    <ct-menu />
    <router-view />
    <ct-footer class="dark-footer" />
  </div>
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

export default {
  components: {
    CtMenu,
    CtFooter
  }
};
</script>
