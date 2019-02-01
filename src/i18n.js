import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  ru: {
    menu: {
      about: "О нас",
      products: "Продукты",
      news: "Новости",
      team: "Команда",
      partners: "Партнеры",
      contacts: "Контакты"
    }
  },
  kz: {
    message: {}
  }
};

export const i18n = new VueI18n({
  locale: "ru", // set locale
  fallbackLocale: "ru",
  messages, // set locale messages,
  enableInSFC: false
});
