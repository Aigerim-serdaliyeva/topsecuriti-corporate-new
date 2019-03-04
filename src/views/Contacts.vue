<template lang="pug">
  section(class="full-section_pad ct-contacts")
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
