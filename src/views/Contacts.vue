<template lang="pug">
    section(v-if="!isMobile" ,class="full-section_pad ct-contacts")
      .ct-contacts__wrap 
          section
              h2  Если вы не смогли с нами связаться, вы можете оставить заявку, наш менеджер обязательно Вам перезвонит.
              form(action="")
                  input(type="text" placeholder="Александр")
                  input(type="text" placeholder="+7(777) 777-77-77")
                  button
                      span Оставить заявку
          section
              .map
              p   Наш офис расположен по адресу г Алматы ул ыжвдалф2 дом луфцоу3 кв дфылвоф3. Вы можете связатсья с нами по телефону : 290312-21-3 или на писать нам на наш Email: 234цаооцуадлодц. График работы офиса с пн по пн без выходных и перерывов на обед *ПАМАГИТИ*
    section(v-else-if="isMobile", class="full-section ct-contacts default-bg")
        .ct-contacts__wrap 
            mobile-header(:title="`Контакты`")
            main
                p   Наш офис расположен по адресу г Алматы ул ыжвдалф2 дом луфцоу3 кв дфылвоф3. Вы можете связатсья с нами по телефону : 290312-21-3 или на писать нам на наш Email: 234цаооцуадлодц. График работы офиса с пн по пн без выходных и перерывов на обед *ПАМАГИТИ*
                p   Если вы не смогли с нами связаться, вы можете оставить заявку, наш менеджер обязательно Вам перезвонит.
                form(action="")
                  input(type="text" placeholder="Александр")
                  input(type="text" placeholder="+7(777) 777-77-77")
                  button
                      span Оставить заявку

</template>

<script>
import BeginLogo from "@/components/svg-components/BeginLogo.vue";
import Visited from "@/mixins/visited";

export default {
  metaInfo: {
    title: "Контакты"
  },
  components: {
    BeginLogo
  },
  mixins: [Visited]
};
</script>
