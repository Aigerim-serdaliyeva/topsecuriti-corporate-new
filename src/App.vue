<template lang="pug">
    div
        div(id="app", v-if="true")
            ct-menu(v-if="true")
            router-view(:key="$route.fullPath")            
        div(v-if="false")
            site-off
</template>

<style lang="scss">
@import "./assets/scss/style.scss";
</style>

<script>
import CtMenu from "./components/CtMenu.vue";
import SiteOff from "./components/SiteOff.vue";

export default {
  components: {
    CtMenu,
    SiteOff
  }
};
</script>
