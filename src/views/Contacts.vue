<template lang="pug">
  .ct-contacts  
    begin-bg.begin-bg-contacts
        .article
            begin-logo
    .ct-pages-content
        .ct-pages-content__wrap 
            h2.primary  Контакты   
            p.primary   Наш офис расположен по адресу г Алматы ул Шевченко 153/1. Вы можете связатьcя с нами по телефону : 290312-21-3 или написать нам на наш Email: info@topsecurity.kz. График работы офиса с 9:00 до 18:00  
            .map
            h2.secondary  Связаться с нами
            p.secondary   Если вы не смогли с нами связаться, вы можете оставить заявку, наш менеджер обязательно Вам перезвонит.
            p.input-text Ваше Имя #[br]
                input(type="text", placeholder="Александр") 
            p.input-text.input-text-secondary Ваш Номер телефона #[br]  
                input(type="text", placeholder="87777777777")  
            button Оставить заявку            
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
