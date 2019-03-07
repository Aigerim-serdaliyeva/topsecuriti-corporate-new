<template lang="pug">
    .mobile-article    
        .mobile-article__wrap
            .mobile-article__wrap__toggle(@click="toggleArticle")
                img(src="~@/assets/images/mobile/article.svg", alt="")
            p(v-for="(item,index) in articleList",:class="{ 'active-article': number === index }" :key="index", @click="changeArticle(index)") {{ item.h2 }}
</template>

<script>
export default {
  data() {
    return {
      articleList: require("@/assets/json/article.json")
    };
  },
  computed: {
    number() {
      return this.$store.state.numberArticle;
    }
  },
  methods: {
    toggleArticle() {
      this.$store.commit("toggleArticle");
    },
    changeArticle(index) {
      this.$store.commit("changeNumberArticle", index);
      this.$store.commit("toggleArticle");
    }
  }
};
</script>
