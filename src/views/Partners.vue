<template lang="pug">
    section(class="full-section_pad ct-partners")
        .ct-partners__wrap
            .ct-partners__wrap__slider
                .ct-partners__wrap__slider__image(v-for="(item, index) in 9", :key="index",)
                    img(:class="`partners-${index + 1}`" :src="require(`@/assets/images/partners/partners-${index + 1}.png`)")                              
</template>

<script>
export default {
  mounted() {
    // eslint-disable-next-line
    const partnersSlider = new Siema({
      selector: ".ct-partners__wrap__slider",
      perPage: 6
    });
  }
};
</script>
