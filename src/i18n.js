import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  ru: {
    message: {
      hello: "о нас"
    }
  },
  kz: {
    message: {
      hello: "о кермен"
    }
  }
};

export const i18n = new VueI18n({
  locale: "ru", // set locale
  fallbackLocale: "ru",
  messages // set locale messages
});
