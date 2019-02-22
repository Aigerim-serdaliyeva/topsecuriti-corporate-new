<template lang="pug">
    .ct-partners 
        begin-bg.begin-bg-partners
            .article 
                begin-logo
                p Значимость этих проблем настолько очевидна, что начало повседневной лляет оляет ояет оработы по формированию позиции позволяет оценить значение ляет оляет ляет ояет оосоответствующий условий активизации. Значимость этих проблем настолько очевидна, что начало повседнеляет оляет овной работыляет оляет о по формированию позиции позволяет оценить значение соответствующий условий активизации.
        .ct-pages-content        
            .ct-pages-content__wrap
                h2 НАШИ КЛИЕНТЫ
                .ct-partners__list                                             
                        article(v-for="(item,index) in partners", :key="index") 
                            a(:href="'http://' + item.href", target="_blank")
                                img(:class="`partners-${item.img}`", :src="require(`@/assets/images/partners/${item.img}.png`)", alt="")                        
                            div
                                h3 {{item.title}}
                                p {{item.text}}
                                    span {{item.span}}

</template>

<script>
import BeginLogo from "@/components/svg-components/BeginLogo.vue";
import Visited from "@/mixins/visited";

export default {
  metaInfo: {
    title: "Клиенты"
  },
  components: {
    BeginLogo
  },
  mixins: [Visited],
  data() {
    return {
      partners: require("@/assets/json/clients-main.json")
    };
  }
};
</script>
