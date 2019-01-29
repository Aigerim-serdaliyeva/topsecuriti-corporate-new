<template>
  <div class="about">
    <h1>{{ $t("message.hello") }}</h1>
  </div>
</template>

<script>
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "О компании"
    // all titles will be injected into this template
  }
};
</script>
