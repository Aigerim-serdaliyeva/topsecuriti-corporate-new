<template lang="pug">
    .mobile-menu
        .mobile-menu__wrap 
            .mobile-menu__wrap__toggle(@click="toggleMenu")
                img(src="~@/assets/images/mobile/toggle.svg", alt="")
            ul(:class="visitedData")                                
                li(v-for="(item, index) in menu" :class="[{ nav_active_yellow: visitedData === item.path }, 'nav-item']" :key="index")
                    router-link(:to="`/${item.path}`" @click.native="visited(item.path);"
                         :key="index" ) {{ item.ru }}                                   
</template>

<script>
export default {
  computed: {
    visitedData() {
      return this.$store.state.visitedData;
    },
    menu() {
      return this.$store.state.mobileMenu;
    }
  },
  methods: {
    visited(path) {
      this.$store.commit("changeVisitedData", path);
      setTimeout(() => {
        this.$store.commit("toggleMenu");
      }, 100);
    },
    toggleMenu() {
      this.$store.commit("toggleMenu");
    }
  }
};
</script>
