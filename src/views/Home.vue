<template>
  <div class="ct-index">
    <transition name="nav-scroll">
      <ct-nav v-show="scrolledData" :lists-prop="lists" :fixed="true" />
    </transition>

    <section class="ct-index__description">
      <h1>Top security kz</h1>
      <p>
        Компания создавалось с целью поднять на новый уровень качество
        оказываемых услуг в сфере охраны.<br />
        Мы сделали акцент на основопологающие пункты безопасности:
      </p>
      <ct-index-description-list />
      <p>
        Цель нашей компании - Дать людям чувство защищенности и уверености в
        охране
      </p>
      <div id="indescr" class="ct-index__description__bg" />
    </section>
    <ct-index-services />

    <section class="ct-index__bydirector">
      <p>
        Наше охранное агенство основанное в 1203918 году в г. Алматы. Мы Мы Мы
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
import { TimelineMax } from "gsap";

export default {
  metaInfo: {
    title: "Главная"
  },
  components: {
    CtNav,
    CtIndexServices,
    CtIndexNews,
    CtIndexDescriptionList
  },
  data() {
    return {};
  },
  computed: {
    lists() {
      return this.$store.state.lists;
    },
    scrolledData() {
      return this.$store.state.scrolledData;
    }
  },
  mounted() {
    this.$nextTick(this.pinContainerScene);
    this.$nextTick(this.triggerMenu);
  },
  destroyed() {
    // Destroy ScrollMagic when our component is removed from DOM
    this.$ksvuescr.$emit("destroy");
    this.$store.commit("hideScrolledData");
  },
  methods: {
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
      svgPath.forEach((el, index) => {
        if (index !== 1 && index !== 2 && index !== 3) {
          // Задаю рандомные значения для позиций каждого элемента в svg
          let left = Math.floor(Math.random() * 100) - 50;
          let top = Math.floor(Math.random() * 50) - 25;
          // Указываю стили с позицией
          el.style.transform = `translate(${left}vw,${top}vh)`;
          // Создаю аттрибуты и вставляю туда значения чтобы знать позиции,
          // и позже уменьшать их до нуля чтобы все элементы встали на свое место
          el.setAttribute("data-x", left);
          el.setAttribute("data-y", top);
        }
      });
      document.querySelector(".svg-test #path2").style.transform =
        "translate(-40vw, 10vh) rotate(-50deg)";

      document.querySelector(".svg-test #path3").style.transform =
        "translate(20vw, 50vh) rotate(-30deg)";

      document.querySelector(".svg-test #path4").style.transform =
        "translate(50vw, -40vh) rotate(80deg)";

      const tl = new TimelineMax();
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
