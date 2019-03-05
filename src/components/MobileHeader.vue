<template lang="pug">
    header.mobile-header
        .flex-beetween
            img(src="~@/assets/images/mobile/toggle.svg", alt="").mobile-header__svg
            img(v-if="article", src="~@/assets/images/mobile/article.svg", alt="").mobile-header__article
        .mobile-header__title
            .mobile-header__title__item
            h2 {{title}}
            .mobile-header__title__item    
        mobile-menu(v-if="false ")              
        mobile-article(v-if="article")      
</template>

<script>
import MobileMenu from "@/components/MobileMenu.vue";
import MobileArticle from "@/components/MobileMenuArticle.vue";

export default {
    components: {
        MobileMenu, MobileArticle
    },
    props: {
    title: {
            type: String,
            required: true
        },
        article: {
            type: Boolean,
            required:false
        }
    }
}
</script>
