<template lang="pug">
    section.ct-index(v-if="!isMobile")
      <slot />
      
      div(class="ct-welcome full-section flex flex-all-center-column",ref="ctwelcome")                    
          welcome-svg.ct-welcome__logo              
          .ct-welcome__description
              h2= "Безопасность, доступная каждому"            
          .ct-welcome__headphone
              router-link(to="/contacts")
                headphone                          
          p.ct-welcome__p Связаться с нами              
          .ct-welcome__copyright
              | All Rights Reserved 2019 «Top Security KZ»   
          a(href="https://app.topsecurity.kz/", target="_blank")
            .ct-welcome__hidden.hidden_left  
              img(src="~@/assets/images/ni/index-left.jpg")
              .h-r
                span Тревожная кнопка
                <svg width="56" height="100" viewBox="0 0 56 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.32911C0 2.83364 2.80548 0 6.26621 0H49.503C52.9638 0 55.7692 2.83364 55.7692 6.32911V93.6709C55.7692 97.1664 52.9638 100 49.503 100H6.2662C2.80547 100 0 97.1664 0 93.6709V6.32911ZM6.26621 9.49367C6.26621 7.74593 7.66894 6.32911 9.39931 6.32911H46.3699C48.1003 6.32911 49.503 7.74593 49.503 9.49367V83.5443C49.503 85.292 48.1003 86.7089 46.3699 86.7089H9.39931C7.66894 86.7089 6.26621 85.292 6.26621 83.5443V9.49367ZM27.8846 98.1013C30.4802 98.1013 32.5843 95.976 32.5843 93.3544C32.5843 90.7328 30.4802 88.6076 27.8846 88.6076C25.2891 88.6076 23.185 90.7328 23.185 93.3544C23.185 95.976 25.2891 98.1013 27.8846 98.1013Z" fill="white"/>
                <circle cx="28" cy="50" r="13" fill="white"/>
                </svg>


          a(href="https://promo.topsecurity.kz/", target="_blank")
            .ct-welcome__hidden.hidden_right  
              img(src="~@/assets/images/ni/index-right.jpg")         
              .h-r
                  span Охранная сигнализация
                  <svg viewBox="0 0 145 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 11.9778C0 5.36266 4.95563 2.17485e-05 11.0687 2.17485e-05L133.931 0C140.044 0 145 5.36264 145 11.9778V84.2476L0 83.9482V11.9778ZM6.30435 16.7459C6.30435 10.9958 10.8291 6.33441 16.4106 6.33441H128.589C134.171 6.33441 138.696 10.9958 138.696 16.7459V77.9132L6.30435 77.6529V16.7459Z" fill="white"/>
                  <path d="M11.0687 100C4.95563 100 0 94.649 0 88.0483H145C145 94.649 140.044 100 133.931 100H11.0687Z" fill="white"/>
                  <path d="M19.5435 23.4347C19.5435 21.6869 20.9548 20.2701 22.6957 20.2701H69.3478C71.0887 20.2701 72.5 21.6869 72.5 23.4347V52.5782C72.5 54.326 71.0887 55.7428 69.3478 55.7428H22.6957C20.9548 55.7428 19.5435 54.326 19.5435 52.5782V23.4347Z" fill="white"/>
                  <path d="M111.562 55.367C109.479 55.367 107.78 57.0831 107.78 59.1835C107.78 61.284 109.479 63 111.562 63C113.644 63 115.344 61.284 115.344 59.1835C115.344 57.0924 113.644 55.367 111.562 55.367ZM100.402 21C98.3199 21 96.6204 22.716 96.6204 24.8165C96.6204 26.9169 98.3199 28.633 100.402 28.633C102.485 28.633 104.184 26.9169 104.184 24.8165C104.184 22.716 102.485 21 100.402 21ZM100.402 32.4588C98.3199 32.4588 96.6204 34.1748 96.6204 36.2753C96.6204 38.3758 98.3199 40.0918 100.402 40.0918C102.485 40.0918 104.184 38.3758 104.184 36.2753C104.184 34.1748 102.485 32.4588 100.402 32.4588ZM100.402 43.9176C98.3199 43.9176 96.6204 45.6336 96.6204 47.7341C96.6204 49.8346 98.3199 51.5506 100.402 51.5506C102.485 51.5506 104.184 49.8346 104.184 47.7341C104.184 45.6336 102.485 43.9176 100.402 43.9176ZM122.721 28.6423C124.803 28.6423 126.503 26.9263 126.503 24.8259C126.503 22.7254 124.803 21 122.721 21C120.639 21 118.939 22.716 118.939 24.8165C118.939 26.9169 120.639 28.6423 122.721 28.6423ZM111.562 43.9176C109.479 43.9176 107.78 45.6336 107.78 47.7341C107.78 49.8346 109.479 51.5506 111.562 51.5506C113.644 51.5506 115.344 49.8346 115.344 47.7341C115.344 45.6336 113.644 43.9176 111.562 43.9176ZM122.721 43.9176C120.639 43.9176 118.939 45.6336 118.939 47.7341C118.939 49.8346 120.639 51.5506 122.721 51.5506C124.803 51.5506 126.503 49.8346 126.503 47.7341C126.503 45.6336 124.803 43.9176 122.721 43.9176ZM122.721 32.4588C120.639 32.4588 118.939 34.1748 118.939 36.2753C118.939 38.3758 120.639 40.0918 122.721 40.0918C124.803 40.0918 126.503 38.3758 126.503 36.2753C126.503 34.1748 124.803 32.4588 122.721 32.4588ZM111.562 32.4588C109.479 32.4588 107.78 34.1748 107.78 36.2753C107.78 38.3758 109.479 40.0918 111.562 40.0918C113.644 40.0918 115.344 38.3758 115.344 36.2753C115.344 34.1748 113.644 32.4588 111.562 32.4588ZM111.562 21C109.479 21 107.78 22.716 107.78 24.8165C107.78 26.9169 109.479 28.633 111.562 28.633C113.644 28.633 115.344 26.9169 115.344 24.8165C115.344 22.716 113.644 21 111.562 21Z" fill="white"/>
                  </svg>



    section(v-else-if="isMobile" ,class="full-section ct-index") 
        transition(name="toggle-menu") 
            mobile-menu(v-if="stateMenu")
        .ct-index__wrap  
            .ct-index__wrap__toggle(@click="toggleMenu")
                img(src="~@/assets/images/mobile/toggle.svg", alt="")     
            .ct-index__wrap__svg
                img(src="~@/assets/images/mobile/index-logo.svg", alt="")     
            .ct-index__wrap__text                      
                h1 Безопасность, доступная каждому
            .ct-index__wrap__choose
                a(href="https://app.topsecurity.kz/", target="_blank") Мобильный #[br] телохранитель
                a(href="https://promo.topsecurity.kz/", target="_blank") Промо-сайт
            router-link(to="/contacts", class="call-index")
                .ct-index__wrap__headphone
                    headphone             
                p Связаться с нами                                
            .ct-index__wrap__copyright                   
                | All Rights Reserved 2019 «Top Security KZ»      
                        

</template>

<script>
import { TimelineLite } from "gsap";
import Visited from "@/mixins/visited";
import WelcomeSvg from "@/components/svg-components/WelcomeSvg";
import Headphone from "@/components/svg-components/index/Headphone.vue";
import MobileMenu from "@/components/MobileMenu";

export default {
  mixins: [Visited],
  data() {
    return {
      welcomeSvgDesktop: "",
      welcomeSvgMobile: ""
    };
  },
  components: {
    WelcomeSvg,
    Headphone,
    MobileMenu
  },
  computed: {
    lists() {
      return this.$store.state.menu;
    },
    stateMenu() {
      return this.$store.state.toggleMenu;
    }
  },
  mounted() {
    if (window.matchMedia("(min-width: 960px)").matches) {
      this.pinContainerScene();
    }
  },
  methods: {
    toggleMenu() {
      this.$store.commit("toggleMenu");
    },
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
        .to(
          [
            ".ct-welcome__headphone",
            ".ct-welcome__p",
            ".ct-welcome__description",
            ".ct-welcome__copyright"
          ],
          0.5,
          {
            opacity: 1,
            y: "0%"
          }
        );
    }
  }
};
</script>
