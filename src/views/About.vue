<template lang="pug">
    .ct-about
        begin-bg.begin-bg-about      
            .article      
                begin-logo
        .ct-pages-content 
            .ct-pages-content__wrap  
                             

</template>

<script>
import BeginLogo from "@/components/svg-components/BeginLogo.vue";
import Visited from "@/mixins/visited";

export default {
  metaInfo: {
    title: "О нас"
  },
  mixins: [Visited],
  components: {
    BeginLogo
  }
};
</script>
