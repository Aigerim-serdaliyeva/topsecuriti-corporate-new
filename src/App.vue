<template lang="pug">
    div
        div(id="app", v-if="true")           
            .body-logo(v-if="!isMobile")             
            transition(name="slide-left", mode="out-in")
                router-view
                    ct-menu(v-if="!isMobile")
        div(v-else)
            site-off
</template>

<style lang="scss">
@import "./assets/scss/style.scss";
</style>

<script>
import CtMenu from "./components/CtMenu.vue";
import SiteOff from "./components/SiteOff.vue";
/* eslint-disable */
import TweenLite from "gsap"

export default {
  components: {
    CtMenu,
    SiteOff
  },
 
};
</script>
