<template lang="pug">
    header.mobile-header
        .flex-beetween
            img(src="~@/assets/images/mobile/toggle.svg", alt="", @click="toggleMenu").mobile-header__svg
            article.skaska                
                a(href="tel:+77010316713") +7 (701) 031-67-13
                a(href="tel:+77273390452") +7 (727) 339 04 52                                
            img(v-if="article", src="~@/assets/images/mobile/article.svg", alt="", @click="toggleArticle").mobile-header__article
        .mobile-header__title
            .mobile-header__title__item
            h2 {{title}}
            .mobile-header__title__item    
        transition(name="toggle-menu")    
            mobile-menu(v-if="stateMenu")    
        transition(name="toggle-article")              
            mobile-article(v-if="stateArticle")      
</template>

<script>
import MobileMenu from "@/components/MobileMenu.vue";
import MobileArticle from "@/components/MobileMenuArticle.vue";

export default {
  components: {
    MobileMenu,
    MobileArticle
  },
  props: {
    title: {
      type: String,
      required: true
    },
    article: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    stateMenu() {
      return this.$store.state.toggleMenu;
    },
    stateArticle() {
      return this.$store.state.toggleArticle;
    }
  },
  methods: {
    toggleMenu() {
      this.$store.commit("toggleMenu");
    },
    toggleArticle() {
      this.$store.commit("toggleArticle");
    }
  }
};
</script>
