<template lang="pug">
    - 
        var text = "Наш офис расположен по адресу г Алматы ул Шевченко 153/1. Телефон : 5335, +7 (727) 339-04-52. Email: info@topsecurity.kz. График работы офиса с 9.00 - 18.00"

    section(v-if="!isMobile" ,class="full-section_pad ct-contacts")
      <slot />
      .ct-contacts__wrap 
          section
              h2  Если вы не смогли с нами связаться, вы можете оставить заявку, наш менеджер обязательно Вам перезвонит.
              form(action="")
                    input(type="text",  v-model="call_name",  placeholder="Ваше имя")
                    input(type="text", v-mask="'8 (###)-###-##-##'" v-model="call_phone", placeholder="Ваш номер телефона")                    
                    p.call-err(v-if="call_err_trigger")
                        | {{call_err_text}}
                    button.call__submit(type="submit", :class="call_class" @click="submit($event)",ref="call__submit") 
                        span {{call_button}}   
          section
              .map
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A6862e9cf8b07c0ad102e1c1e35c555b28f74248eb498a8bba6eaf0c43303180e&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>
              p= text   
    section(v-else-if="isMobile", class="full-section ct-contacts default-bg")
        .ct-contacts__wrap 
            mobile-header(:title="`Контакты`")
            main
                p= text   
                p   Если вы не смогли с нами связаться, вы можете оставить заявку, наш менеджер обязательно Вам перезвонит.
                form(action="")
                    input(type="text",  v-model="call_name",  placeholder="Ваше имя")
                    input(type="text", v-mask="'8 (###)-###-##-##'" v-model="call_phone", placeholder="Ваш номер телефона")                    
                    p.call-err(v-if="call_err_trigger")
                        | {{call_err_text}}
                    button.call__submit(type="submit", :class="call_class" @click="submit($event)",ref="call__submit") 
                        span {{call_button}}                     

</template>

<script>
import BeginLogo from "@/components/svg-components/BeginLogo.vue";
import Visited from "@/mixins/visited";
import axios from "axios";

export default {
  data() {
    return {
      call_button: "Оставить заявку",
      call_class: "call__pre",
      call_name: null,
      call_phone: null,
      call_err_trigger: false,
      call_err_text: "Пожалуйста, заполните нужные поля",
      publicPath: process.env.BASE_URL
    };
  },
  components: {
    BeginLogo
  },
  mixins: [Visited],
  methods: {
    submit(e) {
      e.preventDefault();
      e.stopPropagation();
      this.call_err_text = "Пожалуйста, заполните нужные поля";
      if (
        this.call_name !== null &&
        this.call_phone !== null &&
        this.call_name !== "" &&
        this.call_phone !== ""
      ) {
        if (this.call_phone.length < 17) {
          this.call_err_trigger = true;
          this.call_err_text = "Номер не введен полностью";
        } else {
          this.call_err_trigger = false;
          this.call_button = "Отправляется...";
          this.call_class = "call__upd";
          const options = {
            method: "POST",
            headers: { "content-type": "application/x-www-form-urlencoded" },
            data: {
              name: this.call_name,
              phone: this.call_phone
            },
            url: `${this.publicPath}mailer.php`
          };
          axios(options).then(res => {
            console.log(res);
            this.call_button = "Ваша заявка отправлена";
            this.call_class = "call__success";
          });
        }
      } else {
        this.call_err_trigger = true;
      }
    }
  }
};
</script>
