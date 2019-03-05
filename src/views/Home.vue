<template lang="pug">
    section.ct-index(v-if="!isMobile")
      div(class="ct-welcome full-section flex flex-all-center-column",ref="ctwelcome")                    
          welcome-svg.ct-welcome__logo              
          .ct-welcome__description
              h2= "Безопасность, доступная каждому"            
          .ct-welcome__headphone
              headphone                          
          p Связаться с нами              
          .ct-welcome__copyright
              | All Rights Reserved 2019 «TopSecurity»   
          .ct-welcome__hidden.hidden_left  
              img(src="~@/assets/images/component-personal.jpg")
          .ct-welcome__hidden.hidden_right  
              img(src="~@/assets/images/component-personal.jpg")         

    section(v-else-if="isMobile" ,class="full-section ct-index")  
        .ct-index__wrap  
            .ct-index__wrap__toggle
            .ct-index__wrap__svg
                img(src="~@/assets/images/mobile/index-logo.svg", alt="")     
            .ct-index__wrap__text                      
                h1 Безопасность, доступная каждому
            .ct-index__wrap__choose
                p Мобильный #[br] телохранитель
                p Промо-сайт
            .ct-index__wrap__headphone
                headphone             
            p Связаться с нами                                
            .ct-index__wrap__copyright                   
                | All Rights Reserved 2019 «TopSecurity»      

                        

</template>

<script>
import { TimelineLite } from "gsap";
import Visited from "@/mixins/visited";
import WelcomeSvg from "@/components/svg-components/WelcomeSvg";
import Headphone from "@/components/svg-components/index/Headphone.vue";

export default {
  metaInfo: {
    title: "Главная"
  },
  mixins: [Visited],
  data() {
    return {
      welcomeSvgDesktop: "",
      welcomeSvgMobile: ""
    };
  },
  components: {
    WelcomeSvg,
    Headphone
  },
  computed: {
    lists() {
      return this.$store.state.menu;
    }
  },
  mounted() {      
      if(window.matchMedia("(min-width: 960px)").matches) {
          this.pinContainerScene();
      }
  },
  methods: {
    pinContainerScene() {
      const svgPath = document.querySelectorAll(".svg-test path");
      const tl = new TimelineLite();

      svgPath.forEach((el, index) => {
        if (index !== 1 && index !== 2 && index !== 3) {
          // Задаю рандомные значения для позиций каждого элемента в svg
          let left, top;
          if (window.matchMedia("(max-width:960px)").matches) {
            left = Math.floor(Math.random() * 200) - 100;
            top = Math.floor(Math.random() * 100) - 50;
          } else {
            left = Math.floor(Math.random() * 100) - 50;
            top = Math.floor(Math.random() * 50) - 25;
          }

          // Указываю стили с позицией
          tl.set(el, {
            transform: `translate(${left}vw,${top}vh)`
          });
          // Создаю аттрибуты и вставляю туда значения чтобы знать позиции,
          // и позже уменьшать их до нуля чтобы все элементы встали на свое место
          el.setAttribute("data-x", left);
          el.setAttribute("data-y", top);
        }
      });

      tl.set(".ct-welcome__description", {
        opacity: 0
      })
        .set(".svg-test #path2", {
          transform: "translate(-40vw, 10vh) rotate(-50deg)",
          opacity: 1
        })
        .set(".svg-test #path3", {
          transform: "translate(20vw, 50vh) rotate(-30deg)",
          opacity: 1
        })
        .set(".svg-test #path4", {
          transform: "translate(50vw, -40vh) rotate(80deg)",
          opacity: 1
        })
        .to(svgPath, 0.5, {
          transform: "translate(0,0)",
          delay: 0.5
        })
        .to(".ct-welcome__description", 0.5, {
          opacity: 1,
          transform: "translateY(0)"
        });
    }
  }
};
</script>
