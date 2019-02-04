<template lang="pug">
    <section class="ct-index__news">
        h2 НОВОСТИ КОМПАНИИ            
            ul                
                li(v-for="(item,index) in news", :key="index")
                    router-link(to='/news' @click.native="$store.commit('changeNumber', index)" )                                         
                        img(src="~@/assets/images/component-personal.jpg")
                        article
                            h3 {{item.title}} 
                            .line
                            p {{item.subtitle}}                  
                            .end-line
                            .content
                                span 3 января, 2018
                                span Подробнее                                                                                                                      
    </section>
</template>

<script>
export default {
  computed: {
    news() {
      return this.$store.state.indexNews;
    }
  }
};
</script>
