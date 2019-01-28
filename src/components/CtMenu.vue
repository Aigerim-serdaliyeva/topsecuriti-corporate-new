<template>
  <header id="header">
    <!-- Welcome block -->
    <div v-if="this.$route.path === '/'">
      <div id="trigger1" />
      <div id="pin1">
        <div class="ct-welcome">
          <!-- Импортировал svg как компонент чтобы в будущем при расширении логики
               я мог использовать props
           -->
          <welcome-svg />
          <div class="ct-welcome__description">
            <h2>
              Первое инновационное охранное агенство, <br />
              на рынке Казахстана
            </h2>
            <!-- кнопка подробнее в welcome блоке svg-->
            <about-scroll />
          </div>
        </div>
      </div>
    </div>
    <!-- Menu -->
    <ct-nav :lists-prop="lists" :fixed="false" />
  </header>
</template>

<script>
import CtNav from "./CtNav";
import WelcomeSvg from "./svg-components/WelcomeSvg";
import AboutScroll from "./svg-components/AboutScroll";

export default {
  components: {
    WelcomeSvg,
    AboutScroll,
    CtNav
  },
  computed: {
    lists() {
      return this.$store.state.lists;
    }
  }
};
</script>
