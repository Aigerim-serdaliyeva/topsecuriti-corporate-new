<template lang="pug">                   
    .ct-news
      begin-bg.begin-bg-news
      .ct-pages-content
        .ct-pages-content__wrap
              //- Current news
              //- через aside я определяю number чтобы вытаскивать определенные новости
              article
                  h2 {{ news[number].title }}
                  .line.line-primary.line-yellow
                  p {{ news[number].primContent}}
                  .full-line.full-line-primary.line-yellow
                  img(:src="require(`@/assets/images/news/${news[0].img}`)")
                  .full-line.full-line-secondary.line-yellow
                  p {{ news[number].secContent}}
                  .line.line-secondary.line-brown
                  span {{ news[number].date }}
              //- Aside 
              aside
                  h2 Другие новости
                  .aside-container
                      section(v-for="(item,index) in aside" , :key="index", @click="$store.commit('changeNumber', index)")
                          img(src="~@/assets/images/news/aside.jpg") 
                          .content
                              h3 {{ item.title }}
                              p {{ item.content }}
                              .line.line-brown                    
                              div 
                                  span {{ item.date }} 
                                  a Подробнее 
</template>

<script>
export default {
  metaInfo: {
    title: "Новости"
  },
  computed: {
    number() {
      return this.$store.state.number;
    },
    news() {
      return this.$store.state.mainNews;
    },
    aside() {
      return this.$store.state.aside;
    }
  }
};
</script>
