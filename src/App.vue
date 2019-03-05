<template lang="pug">
    div
        div(id="app", v-if="true")
            ct-menu(v-if="!isMobile")
            transition(:name="transitionName", mode="out-in")
                router-view(:key="$route.fullPath")            
        div(v-else)
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
  },
  data() {
      return {
          transitionName: ''
      }      
  },
  watch: {
  '$route' (to, from) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
  }
}
};
</script>
