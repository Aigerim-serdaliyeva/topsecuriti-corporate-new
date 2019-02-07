<template>
  <div class="ct-index">
    <ct-nav v-show="scrolledData" :lists-prop="lists" :fixed="true" />
    <div v-if="$isMobile" id="indescr"></div>
    <section ref="etarget" class="ct-index__description etarget">
      <h1>Top security kz</h1>
      <p>
        Компания создавалась с целью поднять на новый уровень качества
        оказываемых услуг в сфере охраны.<br />
        Мы сделали акцент на основополагающие пункты безопасности:
      </p>
      <ct-index-description-list v-if="!$isMobile()" />
      <ct-index-description-list-mobile v-else />
      <p>
        Цель нашей компании - Дать людям чувство защищенности и уверенности в
        охране
      </p>
      <div class="ct-index__description__bg" />
    </section>
    <ct-index-services />

    <section class="ct-index__bydirector">
      <p>
        Наше охранное агенство основанное в 1203918 году в г. Алматы. Мы
        занимаемся обеспечение безопасности. Значимость этих проблем настолько
        очевидна, что начало повседневной работы по формированию позиции
        позволяет оценить значение соответствующий условий активизации. Не
        следует, однако забывать, что начало повседневной работы по формированию
        позиции играет важную роль в формировании дальнейших направлений
        развития.
      </p>
      <span>Директор Компании, TopSecurity KZ</span>
    </section>

    <ct-index-news />
  </div>
</template>

<script>
import CtNav from "@/components/CtNav";
import CtIndexServices from "@/components/CtIndexServices";
import CtIndexNews from "@/components/CtIndexNews";
import CtIndexDescriptionList from "@/components/CtIndexDescriptionList.vue";
import CtIndexDescriptionListMobile from "@/components/CtIndexDescriptionListMobile.vue";
import { TimelineLite } from "gsap";

export default {
  metaInfo: {
    title: "Главная"
  },
  components: {
    CtNav,
    CtIndexServices,
    CtIndexNews,
    CtIndexDescriptionList,
    CtIndexDescriptionListMobile
  },
  data() {
    return {};
  },
  computed: {
    lists() {
      return this.$store.state.menu;
    },
    scrolledData() {
      return this.$store.state.scrolledData;
    }
  },
  mounted() {
    this.$nextTick(this.pinContainerScene);
    this.$nextTick(this.triggerMenu);
    this.$nextTick(this.hoverAnim);
  },
  destroyed() {
    // Destroy ScrollMagic when our component is removed from DOM
    this.$ksvuescr.$emit("destroy");
    this.$store.commit("hideScrolledData");
  },
  methods: {
    hoverAnim() {
      let target = this.$refs.etarget;
      let x, y;
      let start = false;
      if (start) {
        setInterval(() => {
          x = Math.floor(Math.random() * 40);
          y = Math.floor(Math.random() * 300);
          target.style.setProperty("--size", "0");
          setTimeout(() => {
            target.style.setProperty("--x", `${x}%`);
            target.style.setProperty("--y", `${y}px`);
            target.style.setProperty("--size", "300px");
          }, 1000);
        }, 2000);
      }
    },
    triggerMenu() {
      let self = this;
      const scene2 = new this.$scrollmagic.Scene({
        triggerElement: "#indescr",
        triggerHook: "onLeave"
      })
        .on("start", function() {
          self.$store.commit("showScrolledData");
        })
        .on("leave", function() {
          self.$store.commit("hideScrolledData");
        });
      this.$ksvuescr.$emit("addScene", "triggerMenu", scene2);
    },
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

      tl.set(".svg-test #path2", {
        transform: "translate(-40vw, 10vh) rotate(-50deg)"
      });
      tl.set(".svg-test #path3", {
        transform: "translate(20vw, 50vh) rotate(-30deg)"
      });
      tl.set(".svg-test #path4", {
        transform: "translate(50vw, -40vh) rotate(80deg)"
      });
      tl.to(svgPath, 0.5, {
        transform: "translate(0,0)",
        delay: 0.5
      }).to(".ct-welcome__description", 0.5, {
        opacity: 1,
        transform: "translateY(0)"
      });
    }
  }
};
</script>
