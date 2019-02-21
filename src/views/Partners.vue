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
      partners: [
        {
          img: "global",
          title: "“Global”",
          text: "Строительная компания",
          href: ""
        },
        {
          img: "bbhs",
          title: "“BLACKBERRY HILLS”",
          text: "Жилой комплекс",
          href: "bbhills.kz"
        },
        {
          img: "pest",
          title: "“Pest Hunter”",
          text: "Услуги дезинфекции",
          href: "pesthunter.kz"
        },
        {
          img: "muratov",
          title: "Muratov Partners",
          text: "Юридическое агентство",
          href: "muratov.kz"
        },
        {
          img: "cleaning",
          title: "Cleaning Master",
          text: "Клининг сервис",
          href: "cleaningmaster.kz"
        },
        {
          img: "newestate",
          title: "New Estate",
          text: "Строительная компания",
          href: "newestate.kz"
        },
        {
          img: "lady",
          title: "Lady's Secrets",
          text: "Салон красоты",
          href: "ladyssecrets.kz"
        },
        {
          img: "hr",
          title: "Human Reserve",
          text: "Рекрутинговое агентство",
          href: "humanreserve.kz"
        }
      ]
    };
  }
};
</script>
