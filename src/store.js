import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    state: {
      visitedData: "",
      scrolledData: false,
      number: 0,
      menu: [
        { path: "about", ru: "О нас" },
        { path: "services", ru: "Услуги" },
        { path: "partners", ru: "Клиенты" },
        { path: "article", ru: "Статьи" },
        { path: "contacts", ru: "Контакты" }
      ],
      mobileMenu: [
        { path: "", ru: "Главная" },
        { path: "about", ru: "О нас" },
        { path: "services", ru: "Услуги" },
        { path: "partners", ru: "Клиенты" },
        { path: "article", ru: "Статьи" },
        { path: "contacts", ru: "Контакты" }
      ],
      indexNews: require("@/assets/json/index-news.json"),
      mainNews: require("@/assets/json/main-news.json"),
      aside: require("@/assets/json/aside.json"),
      toggleMenu: false,
      toggleArticle: false,
      numberArticle: 0
    },
    mutations: {
      changeVisitedData(state, path) {
        state.visitedData = path;
      },
      changeNumberArticle(state, index) {
        state.numberArticle = index;
      },
      toggleMenu(state) {
        state.toggleMenu = !state.toggleMenu;
      },
      toggleArticle(state) {
        state.toggleArticle = !state.toggleArticle;
      },
      showScrolledData(state) {
        state.scrolledData = true;
      },
      hideScrolledData(state) {
        state.scrolledData = false;
      },
      changeNumber(state, number) {
        state.number = number;
      }
    }
  });

export default store;
