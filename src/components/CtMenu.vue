<template lang="pug">
    header#header
        .menu
            .menu__logo
                router-link(to="/", style="z-index:10")
                    menu-logo
            <ct-nav id="indescr" :lists-prop="lists" :fixed="false" />       
            menu-line.menu__line            
</template>

<script>
import MenuLine from "@/components/svg-components/index/MenuLine";
import MenuLogo from "@/components/svg-components/index/MenuLogo";
import CtNav from "@/components/CtNav";

export default {
  computed: {
    lists() {
      return this.$store.state.menu;
    }
  },
  components: {
    MenuLine,
    MenuLogo,
    CtNav
  }
};
</script>
