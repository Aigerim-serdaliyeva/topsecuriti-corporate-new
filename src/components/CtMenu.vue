<template>
  <header id="header">
    <!-- Menu -->
    <ct-nav id="indescr" :lists-prop="lists" :fixed="false" />
    <!-- Мобильное меню -->
  </header>
</template>

<script>
export default {
  computed: {
    lists() {
      return this.$store.state.menu;
    }
  }
};
</script>
