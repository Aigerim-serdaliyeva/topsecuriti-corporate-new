<template lang="pug">
    section(v-if="!isMobile", class="full-section_pad ct-about about_original")
        <slot />
        .ct-about__click(@click="ska($event)", v-if="!isMobile")
        .ct-about__wrap
            section
                img.ct-about__wrap__man(src="~@/assets/images/ni/man.png")
                .ct-about__wrap__icons                    
                    about-svg(v-for="(item,index) in 7", id="svg-icon" :key="index"  :svg="index",:class="{ 'active-about': clickColor === index }" @click.native="clickShowInfo(index)" @mouseover.native="showInfo(index)", @mouseleave.native="hideInfo")                    
            section(ref="defaultText")
                .ct-about__wrap__text    
                    p Охранная организация Top Security KZ – добросовестный и надежный партнер, осуществляющий полный спектр услуг по защите объекта в режиме 24/7. Мы тщательно исследуем новейшие технологии, касающиеся обеспечения безопасности, предупреждения и предотвращения любых действий злоумышленников – будь то несанкционированное проникновение, вандализм либо угроза жизни и здоровью клиента. Обслуживание охранной организацией Top Security KZ – залог вашей уверенности и спокойствия.                            
                    a(:href="`${publicPath}license.pdf`" target="_blank")
                        button.button-bold 
                            span Лицензия         
        .ct-about__hidden(ref="hiddenText")
                article
                    h2 {{aboutList[number].h2}} 
                    p  {{aboutList[number].p}} 

    section(v-else-if="isMobile", class="full-section default-bg ct-about ") 
        .ct-about__wrap 
            mobile-header(:title="`О нас`")
            main                    
                section
                    about-svg(src="", alt="", v-for="(item, index) in 7", :key="index" :svg="index",@click.native="showMobileInfo(index)" )
                section(ref="defaultText")                      
                    p Охранная организация Top Security KZ – добросовестный и надежный партнер, осуществляющий полный спектр услуг по защите объекта в режиме 24/7. Мы тщательно исследуем новейшие технологии, касающиеся обеспечения безопасности, предупреждения и предотвращения любых действий злоумышленников – будь то несанкционированное проникновение, вандализм либо угроза жизни и здоровью клиента. Обслуживание охранной организацией Top Security KZ – залог вашей уверенности и спокойствия.                            
                .ct-about__wrap__hidden(ref="hiddenText")
                        article
                            h2 {{aboutList[number].h2}} 
                            p  {{aboutList[number].p}}                      
            a(:href="`${publicPath}license.pdf`" target="_blank")
                button.button-bold 
                        span Лицензия                                                                            

</template>

<script>
import AboutSvg from "@/components/about/AboutSvg";
import Visited from "@/mixins/visited";
import TweenLite from "gsap/TweenLite";

// eslint-disable-next-line
let hiddenText, defaultText;

export default {
  data() {
    return {
      hiddenText: "",
      aboutList: require("@/assets/json/about.json"),
      number: 0,
      triggerMobile: false,
      triggerClick: true,
      clickColor: null,
      publicPath: process.env.BASE_URL
    };
  },
  mixins: [Visited],
  components: { AboutSvg },
  mounted() {
    hiddenText = this.$refs.hiddenText;
    defaultText = this.$refs.defaultText;
  },
  methods: {
    showInfo(index) {
      this.number = index;
      TweenLite.to(defaultText, 0.3, {
        opacity: 0
      });
      TweenLite.to(hiddenText, 0.3, {
        x: "0%"
      });
    },
    ska(e) {
      if (e.target.id !== "svg-icon") {
        this.triggerClick = true;
        this.clickColor = null;
        TweenLite.to(defaultText, 0.3, {
          opacity: 1
        });
        TweenLite.to(hiddenText, 0.3, {
          x: "100%"
        });
      }
    },
    clickShowInfo(index) {
      this.number = index;
      this.triggerClick = false;
      this.clickColor = index;
    },
    hideInfo() {
      if (this.triggerClick) {
        TweenLite.to(defaultText, 0.3, {
          opacity: 1
        });
        TweenLite.to(hiddenText, 0.3, {
          x: "100%"
        });
      }
    },
    showMobileInfo(index) {
      this.triggerMobile = true;
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
