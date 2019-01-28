<template>
  <div class="ct-index">
    <transition name="nav-scroll">
      <ct-nav v-show="scrolledData" :lists-prop="lists" :fixed="true" />
    </transition>

    <section class="ct-index__description">
      <h2>Кто мы такие?</h2>
      <h1>Top security kz</h1>
      <p>
        Наше охранное агенство основанное в 1203918 году в г. Алматы. Мы
        занимаемся обеспечение безопасности. Значимость этих проблем настолько
        очевидна, что начало повседневной работы по формированию позиции
        позволяет оценить значение соответствующий условий активизации. Не
        следует, однако забывать, что начало повседневной работы по формированию
        позиции играет важную роль в формировании дальнейших направлений
        развития.
      </p>
      <div id="indescr" class="ct-index__description__bg" />
    </section>

    <ct-index-products />

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

    <section class="ct-index__team">
      <span>наша команда</span>
      <h2>TOP SECURITY KZ</h2>
      <ul>
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>
    </section>
  </div>
</template>

<script>
import CtNav from "./../components/CtNav";
import CtIndexProducts from "./../components/CtIndexProducts";
import CtIndexNews from "./../components/CtIndexNews";

export default {
  components: {
    CtNav,
    CtIndexProducts,
    CtIndexNews
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
      let duration = window.innerHeight / 2.5; // Значения должны быть одинаковыми со значение position to fixed в else в ct-menu.vue
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

      const scene = new this.$scrollmagic.Scene({
        triggerElement: "#trigger1",
        triggerHook: "onLeave",
        duration: duration
      })
        .setPin("#pin1", {})
        .on("progress", function(e) {
          let progress = e.progress * 100;

          svgPath.forEach((el, index) => {
            let x = el.getAttribute("data-x"),
              y = el.getAttribute("data-y"),
              r = el.getAttribute("data-r"),
              left = x - (x / 100) * progress,
              top = y - (y / 100) * progress,
              rotate = Math.floor(r - (r / 100) * progress);
            if (index !== 1 && index !== 2 && index !== 3) {
              el.style.transform = `translate(${left}vw,${top}vh)`;
            } else {
              el.style.transform = `translate(${left}vw,${top}vh) rotate(${rotate}deg)`;
            }
          });
        });
      this.$ksvuescr.$emit("addScene", "pinContainerScene", scene);
    }
  }
};
</script>
