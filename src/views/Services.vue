<template lang="pug">
    section(v-if="!isMobile", class="full-section_pad ct-services")      
        <slot />  
        .ct-services__wrap 
            .ct-services__wrap__icons(ref="icons")
                article(v-for="(item,index) in servicesItems" :key="index", @mouseover="showInfo(index)", @mouseleave="hideInfo")
                    img(:src="require(`@/assets/images/services/services-${index + 1}.png`)", alt="") 
                    p {{item.first}}     
                    p {{item.last}}
            .ct-services__wrap__text(ref="defaultText")
                p Специализация охранной организации  #[b TOP SECURITY KZ] — обеспечение безопасности клиентов и их имущества. У нас вы можете заказать услуги охраны в городе Алматы на выгодных условиях.
                .blya
                    p.sika Бесплатно:
                    p.list-style-type                          
                            ul                           
                                li Выезд 
                                li Осмотр помещения
                                li Монтаж
                h2  Охранная сигнализация
                article
                    a(:href="`${publicPath}Standard.pdf`" target="_blank")                       
                        button.button-bold
                            span Standart
                    a(:href="`${publicPath}Premium.pdf`" target="_blank")                       
                        button.button-bold
                            span Premium
            .ct-services__wrap__hidden(ref="hiddenText")
                article
                    img(:class="`hidden-${number + 1}`" :src="require(`@/assets/images/services/services-img-${number + 1}.png`)", alt="")
                    h2 {{servicesList[number].h2}} 
                    p  {{servicesList[number].p}}           

    section(v-else-if="isMobile", class="full-section ct-services default-bg")
        .ct-services__wrap 
            mobile-header(:title="`Услуги`")
            main 
                .ct-services__wrap__icons(ref="icons")
                    article(v-for="(item,index) in servicesItems" :key="index", @click="showMobileInfo(index)")
                        img(:src="require(`@/assets/images/services/services-${index + 1}.png`)", alt="") 
                        p {{item.first}}     
                        p {{item.last}}  
                .ct-services__wrap__text(ref="defaultText")
                    p Специализация охранной организации  #[b TOP SECURITY KZ] — обеспечение безопасности клиентов и их имущества. У нас вы можете заказать услуги охраны в городе Алматы на выгодных условиях.                            
                    .blya
                        p.sika Бесплатно:
                        p.list-style-type                          
                                ul                           
                                    li Выезд 
                                    li Осмотр помещения
                                    li Монтаж                    
                    .pdf
                        a(:href="`${publicPath}Standard.pdf`" target="_blank")                       
                            button.button-bold
                                span Standart
                        a(:href="`${publicPath}Premium.pdf`" target="_blank")                       
                            button.button-bold
                                span Premium                    
                .ct-services__wrap__hidden(ref="hiddenText")
                    article
                        img(:class="`hidden-${number + 1}`" :src="require(`@/assets/images/services/services-img-${number + 1}.png`)", alt="")
                        h2 {{servicesList[number].h2}} 
                        p  {{servicesList[number].p}}                                                                                           

                                                                                  
</template>

<script>
import TweenLite from "gsap/TweenLite";
// eslint-disable-next-line
let hiddenText, icons, defaultText;

export default {
  data() {
    return {
      servicesItems: [
        { first: "Тревожная", last: "Кнопка" },
        { first: "Охранная", last: "Система" },
        { first: "Мобильный", last: "Телохранитель" }
      ],
      servicesList: require("@/assets/json/services.json"),
      number: 0,
      triggerMobile: false,
      publicPath: process.env.BASE_URL
    };
  },
  mounted() {
    hiddenText = this.$refs.hiddenText;
    defaultText = this.$refs.defaultText;
    icons = this.$refs.icons;
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
      TweenLite.to(icons, 0.3, {
        opacity: 0.5
      });
    },
    hideInfo() {
      TweenLite.to(defaultText, 0.1, {
        opacity: 1
      });
      TweenLite.to(hiddenText, 0.3, {
        x: "120%"
      });
      TweenLite.to(icons, 0.3, {
        opacity: 1
      });
    },
    showMobileInfo(index) {
      this.triggerMobile = !this.triggerMobile;
      this.number = index;
      if (this.triggerMobile) {
        TweenLite.to(defaultText, 0.3, {
          opacity: 0
        });
        TweenLite.to(hiddenText, 0.3, {
          x: "0%"
        });
      } else {
        TweenLite.to(defaultText, 0.3, {
          opacity: 1
        });
        TweenLite.to(hiddenText, 0.3, {
          x: "100%"
        });
      }
    }
  }
};
</script>
