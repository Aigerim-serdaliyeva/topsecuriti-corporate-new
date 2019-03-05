<template lang="pug">
    section(v-if="!isMobile", class="full-section_pad ct-about about_original")
        .ct-about__wrap
            section
                img.ct-about__wrap__man(src="~@/assets/images/ni/man.png")
                .ct-about__wrap__icons                    
                    about-svg(v-for="(item,index) in 7", :key="index" :svg="index", @mouseover.native="showInfo(index)", @mouseleave.native="hideInfo")                    
            section(ref="defaultText")
                .ct-about__wrap__text    
                    p Охранная организация TopSecurity KZ – добросовестный и надежный партнер, осуществляющий полный спектр услуг по защите объекта в режиме 24/7. Мы тщательно исследуем новейшие технологии, касающиеся обеспечения безопасности, предупреждения и предотвращения любых действий злоумышленников – будь то несанкционированное проникновение, вандализм либо угроза жизни и здоровью клиента. Обслуживание охранной организацией TopSecurity KZ – залог вашей уверенности и спокойствия.                            
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
                    p Охранная организация TopSecurity KZ – добросовестный и надежный партнер, осуществляющий полный спектр услуг по защите объекта в режиме 24/7. Мы тщательно исследуем новейшие технологии, касающиеся обеспечения безопасности, предупреждения и предотвращения любых действий злоумышленников – будь то несанкционированное проникновение, вандализм либо угроза жизни и здоровью клиента. Обслуживание охранной организацией TopSecurity KZ – залог вашей уверенности и спокойствия.                            
                .ct-about__wrap__hidden(ref="hiddenText")
                        article
                            h2 {{aboutList[number].h2}} 
                            p  {{aboutList[number].p}}                      
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
  metaInfo: {
    title: "О нас"
  },
  data() {
    return {
      hiddenText: "",
      aboutList: require("@/assets/json/about.json"),
      number: 0, 
      triggerMobile: false     
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
      TweenLite.to(defaultText, 0.1, {
        opacity: 0
      });
      TweenLite.to(hiddenText, 0.3, {
        x: "0%"
      });
    },

    hideInfo() {
      TweenLite.to(defaultText, 0.1, {
        opacity: 1
      });
      TweenLite.to(hiddenText, 0.3, {
        x: "100%"
      });
    },
    showMobileInfo(index) {
        this.triggerMobile = true;
        this.number = index;
        if(this.triggerMobile) {
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
