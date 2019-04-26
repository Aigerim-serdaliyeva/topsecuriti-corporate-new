<template lang="pug">
    section(v-if="!isMobile" class="full-section_pad ct-partners")
        <slot />
        .ct-partners__wrap
            .ct-partners__wrap__slider
                .ct-partners__wrap__slider__image(v-for="(item, index) in 9", :key="index")
                    a(v-if="index === 2" href="http://newestate.kz/" target="_blank")
                        img(:class="`partners-${index + 1}`" :src="require(`@/assets/images/partners/partners-${index + 1}.png`)")                              
                    a(v-else-if="index === 3" href="https://bbhills.kz/" target="_blank")
                        img(:class="`partners-${index + 1}`" :src="require(`@/assets/images/partners/partners-${index + 1}.png`)")                                                      
                    a(v-else-if="index === 4" href="https://muratov.kz/" target="_blank")
                        img(:class="`partners-${index + 1}`" :src="require(`@/assets/images/partners/partners-${index + 1}.png`)")                              
                    a(v-else-if="index === 5" href="http://cleaningmaster.kz/" target="_blank")
                        img(:class="`partners-${index + 1}`" :src="require(`@/assets/images/partners/partners-${index + 1}.png`)")                              
                    a(v-else-if="index === 6" href="http://ladyssecrets.kz/" target="_blank")
                        img(:class="`partners-${index + 1}`" :src="require(`@/assets/images/partners/partners-${index + 1}.png`)")                                          
                    a(v-else-if="index === 7" href="http://humanreserve.kz/" target="_blank")
                        img(:class="`partners-${index + 1}`" :src="require(`@/assets/images/partners/partners-${index + 1}.png`)")                              
                    a(v-else-if="index === 8" href="http://pesthunter.kz/" target="_blank")
                        img(:class="`partners-${index + 1}`" :src="require(`@/assets/images/partners/partners-${index + 1}.png`)")                                      
                    a(v-else)
                        img(:class="`partners-${index + 1}`" :src="require(`@/assets/images/partners/partners-${index + 1}.png`)")                              

    section(v-else-if="isMobile", class="full-section ct-partners default-bg")
        .ct-partners__wrap
            mobile-header(:title="`Клиенты`")
            main
                article(v-for="(item, index) in 9", :key="index")
                    a(v-if="index === 2" href="http://newestate.kz/" target="_blank")
                        img(:class="`partners-${index + 1}`" :src="require(`@/assets/images/partners/partners-${index + 1}.png`)")                              
                    a(v-else-if="index === 3" href="https://bbhills.kz/" target="_blank")
                        img(:class="`partners-${index + 1}`" :src="require(`@/assets/images/partners/partners-${index + 1}.png`)")                                                      
                    a(v-else-if="index === 4" href="https://muratov.kz/" target="_blank")
                        img(:class="`partners-${index + 1}`" :src="require(`@/assets/images/partners/partners-${index + 1}.png`)")                              
                    a(v-else-if="index === 5" href="http://cleaningmaster.kz/" target="_blank")
                        img(:class="`partners-${index + 1}`" :src="require(`@/assets/images/partners/partners-${index + 1}.png`)")                              
                    a(v-else-if="index === 6" href="http://ladyssecrets.kz/" target="_blank")
                        img(:class="`partners-${index + 1}`" :src="require(`@/assets/images/partners/partners-${index + 1}.png`)")                                          
                    a(v-else-if="index === 7" href="http://humanreserve.kz/" target="_blank")
                        img(:class="`partners-${index + 1}`" :src="require(`@/assets/images/partners/partners-${index + 1}.png`)")                              
                    a(v-else-if="index === 8" href="http://pesthunter.kz/" target="_blank")
                        img(:class="`partners-${index + 1}`" :src="require(`@/assets/images/partners/partners-${index + 1}.png`)")                                      
                    a(v-else)
                        img(:class="`partners-${index + 1}`" :src="require(`@/assets/images/partners/partners-${index + 1}.png`)")                              

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
