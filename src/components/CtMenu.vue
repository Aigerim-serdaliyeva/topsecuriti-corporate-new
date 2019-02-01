<template>
  <header id="header">
    <!-- Welcome block -->
    <div v-if="this.$route.path === '/'">
      <div id="trigger1" />
      <div id="pin1">
        <div class="ct-welcome" >
          <!-- Импортировал svg как компонент чтобы в будущем при расширении логики
               я мог использовать props
           -->
          <div class="ct-welcome__wrap">
            <div class="logo-svg-parent">
              <welcome-svg v-if="isMobile()"/>
              <welcome-svg v-else/>
            </div>
            <div class="ct-welcome__description">
              <h2>
                Новый стандарт качества охранных компаний
              </h2>
              <!-- кнопка подробнее в welcome блоке svg-->
              <a v-scroll-to="'#nav'"><about-scroll /> </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Menu -->
    <ct-nav :lists-prop="lists" :fixed="false" />
    <!-- <ct-nav :lists-prop="lists" :fixed="false" /> -->
    <!-- Меню для всех страниц кроме основной , так как в основном меню должно выходить спустя скролл, 
         на других страницах меню изначально должно быть фиксированным  
    -->
    <ct-nav
      v-if="this.$route.path !== '/'"
      :lists-prop="$store.state.lists"
      :fixed="true"
    />
  </header>
</template>

<script>
import WelcomeSvg from "./svg-components/WelcomeSvg";
import AboutScroll from "./svg-components/AboutScroll";

export default {
  components: {
    WelcomeSvg,
    AboutScroll
  },
  methods: {
      isMobile() {
          if(window.matchMedia("(max-width:960px)").matches) {
              return false
          } else {
              return true
          }
      }
  },
  computed: {
    lists() {
      return this.$store.state.lists;
    },
  }
};
</script>
