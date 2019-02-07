<template>
  <div v-editable="blok" class="util__flex-eq">
    <h1>{{ blok.da }}</h1>
  </div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
