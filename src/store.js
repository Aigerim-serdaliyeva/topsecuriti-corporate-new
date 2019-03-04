import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    state: {
      visitedData: "index",
      scrolledData: false,
      number: 0,
      menu: [
        { path: "about" },
        { path: "services" },
        { path: "partners" },
        { path: "article" },
        { path: "contacts" }
      ],
      indexNews: require("@/assets/json/index-news.json"),
      mainNews: require("@/assets/json/main-news.json"),
      aside: require("@/assets/json/aside.json")
    },
    mutations: {
      changeVisitedData(state, path) {
        state.visitedData = path;
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
