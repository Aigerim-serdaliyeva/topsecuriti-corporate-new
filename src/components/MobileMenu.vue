<template lang="pug">
    .mobile-menu
        .mobile-menu__wrap 
            .mobile-menu__wrap__toggle
                img(src="~@/assets/images/mobile/toggle.svg", alt="")
            router-link(v-for="(item, index) in menu" :to="`/${item.path}`" @click.native="visited(item.path)"
                 :key="index" ) {{ $t(`menu.${item.path}`) }}                                   
</template>

<script>
export default {
    computed: {
        menu() {
            return this.$store.state.menu;
        }
    }
}
</script>
