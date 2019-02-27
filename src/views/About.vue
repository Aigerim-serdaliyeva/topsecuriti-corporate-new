<template lang="pug">
    section(class="full-section_pad ct-about about_original", v-if="true")
        img.ct-about__logo(src="~@/assets/images/about/logo.svg", alt="")
        h1 Охранная организация TOP SECURITY KZ – добросовестный и надежный партнер, осуществляющий полный спектр услуг по защите объекта в режиме 24/7. Мы тщательно исследуем новейшие технологии, касающиеся обеспечения безопасности, предупреждения и предотвращения любых действий злоумышленников – будь то несанкционированное проникновение, вандализм либо угроза жизни и здоровью клиента. Обслуживание охранной организацией TOP SECURITY KZ – залог вашей уверенности и спокойствия
        a.transition-button Подробнее
            trans-but-top.top      
    about-advantages(v-else)                                                                                                                 
</template>

<script>
import Visited from "@/mixins/visited";
import TransButTop from "@/components/svg-components/TransitionButtonTop.vue";
import AboutAdvantages from "@/components/about/AboutAdvantages.vue";

export default {
  metaInfo: {
    title: "О нас"
  },
  mixins: [Visited],
  components: {
    TransButTop,
    AboutAdvantages
  }
};
</script>
