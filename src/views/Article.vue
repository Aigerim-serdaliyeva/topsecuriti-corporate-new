<template lang="pug">
    section(v-if="!isMobile" ,class="full-section_pad ct-article")
        <slot />
        .ct-article__wrap 
            section  
                article 
                    h2 {{articleList[number].h2}}
                    p {{articleList[number].p}}
            section
                .ct-article__wrap__aside-item(v-for="(item, index) in articleList" :key="index")
                    img(src="~@/assets/images/article/article-test.png", alt="")
                    article
                        h2(@click="changeArticle(index)", :class="{ 'active-border': number === index }") {{articleList[index].h2}}
                        p {{articleList[index].p.slice(0,144)+".."}}
                        
                        .ct-article__wrap__aside-item__date
                            span {{articleList[index].time}}
                            a(@click="changeArticle(index)") Подробнее                        
    section(v-else-if="isMobile", class="full-section ct-article default-bg")
        .ct-article__wrap
            mobile-header(:title="`Статьи`" :article="true")
            section  
                article 
                    h2 {{articleList[number].h2}}
                    p {{articleList[number].p}}
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
    changeArticle(index) {
      this.$store.commit("changeNumberArticle", index);
    }
  }
};
</script>
