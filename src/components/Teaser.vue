<template>
  <div v-editable="blok">
    {{ blok.text }}
  </div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
