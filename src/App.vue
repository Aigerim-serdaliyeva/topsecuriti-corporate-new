<template>
  <div id="app">
    <ct-menu />
    <router-view />
    <ct-footer />
  </div>
</template>

<style lang="scss">
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
