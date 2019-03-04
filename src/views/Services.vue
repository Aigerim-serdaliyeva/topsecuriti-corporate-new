<template lang="pug">
    section(class="full-section_pad ct-services")        
        .ct-services__wrap 
            .ct-services__wrap__icons
                article(v-for="(item,index) in servicesItems" :key="index", @mouseover="showInfo(index)", @mouseleave="hideInfo")
                    img(:src="require(`@/assets/images/services/services-${index + 1}.png`)", alt="") 
                    p {{item.first}}     
                    p {{item.last}}
            .ct-services__wrap__text(ref="defaultText")
                p Специализация охранной организации  #[b TOP SECURITY KZ] — обеспечение безопасности клиентов и их имущества. У нас вы можете заказать услуги охраны в городе Алматы на выгодных условиях.
                h2  Охранная сигнализация
                article
                    button.button-bold
                        span Standart
                    button.button-bold
                        span Premium
            .ct-services__wrap__hidden(ref="hiddenText")
                article
                    h2 {{servicesList[number].h2}} 
                    p  {{servicesList[number].p}} 
                                                                          
</template>

<script>
import TweenLite from "gsap/TweenLite";
// eslint-disable-next-line
let hiddenText, defaultText;

export default {
  data() {
    return {
      servicesItems: [
        { first: "Тревожная", last: "Кнопка" },
        { first: "Охранная", last: "Система" },
        { first: "Мобильный", last: "Телохранитель" }
      ],
      servicesList: require("@/assets/json/services.json"),
      number: 0
    };
  },
  mounted() {
    hiddenText = this.$refs.hiddenText;
    defaultText = this.$refs.defaultText;
  },
  methods: {
    showInfo(index) {
      this.number = index;
      TweenLite.to(defaultText, 0.1, {
        opacity: 0
      });
      TweenLite.to(hiddenText, 0.3, {
        x: "7%"
      });
    },
    hideInfo() {
      TweenLite.to(defaultText, 0.1, {
        opacity: 1
      });
      TweenLite.to(hiddenText, 0.3, {
        x: "120%"
      });
    }
  }
};
</script>
