<template>
  <section>
    <div class="ct-index__clients">
      <h2>ПОД НАШЕЙ ЗАЩИТОЙ</h2>
      <div
        class="client-slider__button client-slider__button__left"
        @click="changeSlide('left')"
      >
        <font-awesome-icon icon="angle-left" />
      </div>
      <div
        class="client-slider__button client-slider__button__right"
        @click="changeSlide('right')"
      >
        <font-awesome-icon icon="angle-right" />
      </div>
      <div class="client-slider">
        <div
          v-for="(item, index) in partners"
          :key="index"
          class="client-slider__block"
          :style="{
            background:
              'url(' +
              require(`@/assets/images/partners/${item.img}.png`) +
              ') no-repeat center / contain'
          }"
        >
          <a
            :href="'http://' + item.href"
            target="_blank"
            style="height:100%; width:100%"
          >
          </a>
        </div>
      </div>
      <div class="client-slider-mobile">
        >
        <div
          v-for="(item, index) in partners"
          :key="index"
          :class="['client-slider__block', `client-slider__block${index}`]"
          :style="{
            background:
              'url(' +
              require(`@/assets/images/partners/${item.img}.png`) +
              ') no-repeat center / contain'
          }"
        ></div>
      </div>
    </div>
  </section>
</template>

<script>
let slider, sliderMobile;

export default {
  data() {
    return {
      partners: require("@/assets/json/clients.json")
    };
  },
  mounted() {
    // eslint-disable-next-line
    slider = new Siema({
      selector: ".client-slider",
      perPage: 4,
      draggable: false
    });
    // eslint-disable-next-line
    sliderMobile = new Siema({
      selector: ".client-slider-mobile",
      perPage: 1,
      draggable: false
    });
  },
  methods: {
    changeSlide(direction) {
      if (window.matchMedia("(max-width:960px)").matches) {
        if (direction === "right") {
          sliderMobile.next();
        } else {
          sliderMobile.prev();
        }
      } else {
        if (direction === "right") {
          slider.next();
        } else {
          slider.prev();
        }
      }
    }
  }
};
</script>
