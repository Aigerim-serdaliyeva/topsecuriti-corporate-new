<template lang="pug">
    section(v-if="!isMobile" class="full-section_pad ct-partners")
        <slot />
        .ct-partners__wrap
            .ct-partners__wrap__slider
                .ct-partners__wrap__slider__image(v-for="(item, index) in 9", :key="index")
                    img(:class="`partners-${index + 1}`" :src="require(`@/assets/images/partners/partners-${index + 1}.png`)")                              

    section(v-else-if="isMobile", class="full-section ct-partners default-bg")
        .ct-partners__wrap
            mobile-header(:title="`Клиенты`")
            main
                img(v-for="(item, index) in 9", :key="index" :class="`partners-${index + 1}`" :src="require(`@/assets/images/partners/partners-${index + 1}.png`)")                                              

</template>

<script>
// eslint-disable-next-line
let partnersSlider;
export default {
  mounted() {
    if (window.matchMedia("(min-width:960px)").matches) {
      // eslint-disable-next-line
      partnersSlider = new Siema({
        selector: ".ct-partners__wrap__slider",
        perPage: 5,
        loop: true
      });

      setInterval(() => {
        partnersSlider.next();
      }, 3000);
    }
  }
};
</script>
