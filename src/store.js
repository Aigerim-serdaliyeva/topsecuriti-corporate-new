import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    state: {
      visitedData: "",
      scrolledData: false,
      lists: [
        { id: 1, path: "about" }
        // { id: 2, path: "products" },
        // { id: 3, path: "news" },
        // { id: 4, path: "team" },
        // { id: 5, path: "partners" },
        // { id: 6, path: "contacts" }
      ]
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
      }
    }
  });

export default store;
