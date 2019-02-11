<template>
  <header id="header">
    <!-- Welcome block -->
    <div v-if="this.$route.path === '/'">
      <div class="ct-welcome" ref="ctwelcome">
        <!-- Импортировал svg как компонент чтобы в будущем при расширении логики
               я мог использовать props
           -->
        <div class="ct-welcome__wrap">
          <div class="logo-svg-parent">
            <welcome-svg :viewbox="welcomeSvgDesktop" v-if="!$isMobile()" />
            <welcome-svg :viewbox="welcomeSvgMobile" v-else />
          </div>
          <div class="ct-welcome__description">
            <h2>
              Новый стандарт качества охранных компаний
            </h2>
            <!-- кнопка подробнее в welcome блоке svg-->
            <a v-scroll-to="'#indescr'"><about-scroll /> </a>
          </div>
        </div>
      </div>
    </div>
    <!-- Menu -->
    <ct-nav id="indescr" :lists-prop="lists" :fixed="false" />
    <!-- <ct-nav :lists-prop="lists" :fixed="false" /> -->
    <!-- Меню для всех страниц кроме основной , так как в основном меню должно выходить спустя скролл, 
         на других страницах меню изначально должно быть фиксированным  
    -->
    <ct-nav v-if="this.$route.path !== '/'" :lists-prop="lists" :fixed="true" />
    <!-- Мобильное меню -->
    <ct-nav-mobile v-if="$isMobile()" />
  </header>
</template>

<script>
import WelcomeSvg from "./svg-components/WelcomeSvg";
import AboutScroll from "./svg-components/AboutScroll";
import CtNavMobile from "./CtNavMobile";

export default {
  data() {
    return {
      welcomeSvgDesktop: "",
      welcomeSvgMobile: ""
    };
  },
  mounted() {
    // *** Для анимации без лагов
    let ctwelcome = this.$refs.ctwelcome;
    if (ctwelcome) {
      ctwelcome.style.opacity = 0;
      window.addEventListener("load", () => {
        ctwelcome.style.opacity = 1;
      });
    }
    // *** /Для анимации без лагов
  },
  components: {
    WelcomeSvg,
    AboutScroll,
    CtNavMobile
  },
  computed: {
    lists() {
      return this.$store.state.menu;
    }
  }
};
</script>
