<template lang="pug">
  div.admin
    section.ct-news(v-if="this.$route.path === '/news'")
      begin-bg.begin-bg-news      
      .ct-pages-content
        .ct-pages-content__wrap
              //- Current news
              //- через aside я определяю number чтобы вытаскивать определенные новости
              article#news-start                  
                component(:type="'main'", :blok="blok.body[number]", :is="blok.body[number].component")                                                                              
              //- Aside 
              aside
                  h2 Другие новости
                  .aside-container    
                    section(v-for="(item,index) in blok.body" v-scroll-to="{el: '#news-start',offset: -50}" @click="$store.commit('changeNumber', index)")                          
                      component(:type="'aside'", :key="item._uid", :blok="item", :is="item.component")
    section(v-else class="ct-index__news")
        h2= 'НОВОСТИ\n КОМПАНИИ'
        ul           
            li(v-for="(item,index) in blok.body.slice(0, 6)")                    
                router-link(to='/news' @click.native="$store.commit('changeNumber', number)" )                                                      
                    component(:number="index", :key="item._uid",  :blok="item", :is="item.component")                                                                                                                       
</template>

<script>
export default {
  props: ["blok"],
  metaInfo: {
    title: "Новости"
  },
  computed: {
    number() {
      return this.$store.state.number;
    }
  }
};
</script>
