<template lang="pug">
    .ct-partners 
        begin-bg.begin-bg-partners
            .article 
                begin-logo
                p Значимость этих проблем настолько очевидна, что начало повседневной лляет оляет ояет оработы по формированию позиции позволяет оценить значение ляет оляет ляет ояет оосоответствующий условий активизации. Значимость этих проблем настолько очевидна, что начало повседнеляет оляет овной работыляет оляет о по формированию позиции позволяет оценить значение соответствующий условий активизации.
        .ct-pages-content        
            .ct-pages-content__wrap
                h2 НАШИ ПАРТНЕРЫ
                .ct-partners__list                     
                        article(v-for="(item,index) in partners", :key="index") 
                            img(:class="`partners-${item.img}`", :src="require(`@/assets/images/partners/${item.img}.png`)", alt="")                        
                            div
                                h3 {{item.title}}
                                p {{item.text}}

</template>

<script>
import BeginLogo from "@/components/svg-components/BeginLogo.vue";

export default {
  metaInfo: {
    title: "Партнеры"
  },
  components: {
    BeginLogo
  },
  data() {
    return {
      partners: [
        { img: "global", title: "“Global”", text: "Охранное агенство" },
        {
          img: "bbhs",
          title: "“BLACKBERRY HILLS”",
          text: "Жилой комплекс"
        },
        { img: "pest", title: "“Pest Hunter”", text: "Охранное агенство" },
        {
          img: "muratov",
          title: "Muratov Partners",
          text: "Юридическое агентство"
        },
        {
          img: "cleaning",
          title: "Cleaning Master",
          text: "Клининг сервис"
        },
        {
          img: "newestate",
          title: "New Estate",
          text: "Строительная компания"
        },
        { img: "lady", title: "Lady's Secrets", text: "Салон красоты" },
        {
          img: "hr",
          title: "Human Reserve",
          text: "Рекрутинговое агентство"
        }
      ]
    };
  }
};
</script>
