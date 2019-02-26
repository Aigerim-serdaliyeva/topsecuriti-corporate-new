<template lang="pug">
  <div class="ct-index">
    <div class="ct-welcome" ref="ctwelcome">      
      <div class="ct-welcome__wrap">
        <div class="logo-svg-parent">
          <welcome-svg :viewbox="welcomeSvgDesktop" v-if="!$isMobile()" />
          <welcome-svg :viewbox="welcomeSvgMobile" v-else />
        </div>
        <div class="ct-welcome__description">
            h2= "Безопасность, доступная \nкаждому."
            index-dick
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TimelineLite } from "gsap";
import Visited from "@/mixins/visited";
import WelcomeSvg from "@/components/svg-components/WelcomeSvg";
import IndexDick from "@/components/svg-components/IndexDick";

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
    IndexDick
  },
  computed: {
    lists() {
      return this.$store.state.menu;
    }
  },
  mounted() {
    // *** Для анимации без лагов
    let welcome = this.$refs.ctwelcome;
    welcome.style.opacity = 1;
    this.pinContainerScene();
    // *** /Для анимации без лагов
  },
  methods: {
    pinContainerScene() {
      let svgPath = document.querySelectorAll(".svg-test path");
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
