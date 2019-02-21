<template>
  <div class="ct-index">
    <ct-nav v-show="scrolledData" :lists-prop="lists" :fixed="true" />
    <div v-if="$isMobile" id="indescr"></div>
    <section class="ct-index__bydirector">
      <p>
        Охранная организация TOP SECURITY KZ – добросовестный и надежный
        партнер, осуществляющий полный спектр услуг по защите объекта в режиме
        24/7. Мы тщательно исследуем новейшие технологии, касающиеся обеспечения
        безопасности, предупреждения и предотвращения любых действий
        злоумышленников – будь то несанкционированное проникновение, вандализм
        либо угроза жизни и здоровью клиента. Обслуживание охранной организацией
        TOP SECURITY KZ – залог вашей уверенности и спокойствия.
      </p>
    </section>
    <section ref="etarget" class="ct-index__description etarget">
      <h2>7 причин довериться TOP SECURITY KZ</h2>
      <ct-index-description-list v-if="!$isMobile()" />
      <ct-index-description-list-mobile v-else />
      <div class="ct-index__description__bg" />
    </section>
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
            class="client-slider__block"
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
    <ct-index-services />

    <component :blok="story.content" :is="story.content.component"> </component>
  </div>
</template>

<script>
import CtNav from "@/components/CtNav";
import CtIndexServices from "@/components/CtIndexServices";
import CtIndexNews from "@/components/CtIndexNews";
import CtIndexDescriptionList from "@/components/CtIndexDescriptionList.vue";
import CtIndexDescriptionListMobile from "@/components/CtIndexDescriptionListMobile.vue";
import { TimelineLite } from "gsap";
import Visited from "@/mixins/visited";
import StoryblokNews from "@/mixins/storyblok_news";

let slider, sliderMobile;

export default {
  metaInfo: {
    title: "Главная"
  },
  mixins: [Visited, StoryblokNews],
  components: {
    CtNav,
    CtIndexServices,
    CtIndexNews,
    CtIndexDescriptionList,
    CtIndexDescriptionListMobile
  },
  data() {
    return {
      bool: true,
      partners: [
        {
          img: "global",
          title: "“Global”",
          text: "Строительная компания",
          href: ""
        },
        {
          img: "pest",
          title: "“Pest Hunter”",
          text: "Услуги дезинфекции",
          href: "pesthunter.kz"
        },
        {
          img: "muratov",
          title: "Muratov Partners",
          text: "Юридическое агентство",
          href: "muratov.kz"
        },
        {
          img: "cleaning",
          title: "Cleaning Master",
          text: "Клининг сервис",
          href: "cleaningmaster.kz"
        },
        {
          img: "newestate",
          title: "New Estate",
          text: "Строительная компания",
          href: "newestate.kz"
        },
        {
          img: "bbhs",
          title: "“BLACKBERRY HILLS”",
          text: "Жилой комплекс",
          href: "bbhills.kz"
        },
        {
          img: "lady",
          title: "Lady's Secrets",
          text: "Салон красоты",
          href: "ladyssecrets.kz"
        },
        {
          img: "hr",
          title: "Human Reserve",
          text: "Рекрутинговое агентство",
          href: "humanreserve.kz"
        }
      ],
      story: {
        content: {
          body: []
        }
      }
    };
  },
  computed: {
    lists() {
      return this.$store.state.menu;
    },
    scrolledData() {
      return this.$store.state.scrolledData;
    }
  },
  mounted() {
    this.$nextTick(this.pinContainerScene);
    this.$nextTick(this.triggerMenu);
    this.$nextTick(this.hoverAnim);
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
  destroyed() {
    // Destroy ScrollMagic when our component is removed from DOM
    this.$ksvuescr.$emit("destroy");
    this.$store.commit("hideScrolledData");
  },
  methods: {
    hoverAnim() {
      let target = this.$refs.etarget;
      let x, y;
      let start = false;
      if (start) {
        setInterval(() => {
          x = Math.floor(Math.random() * 40);
          y = Math.floor(Math.random() * 300);
          target.style.setProperty("--size", "0");
          setTimeout(() => {
            target.style.setProperty("--x", `${x}%`);
            target.style.setProperty("--y", `${y}px`);
            target.style.setProperty("--size", "300px");
          }, 1000);
        }, 2000);
      }
    },
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
    },
    triggerMenu() {
      let self = this;
      const scene2 = new this.$scrollmagic.Scene({
        triggerElement: "#indescr",
        triggerHook: "onLeave"
      })
        .on("start", function() {
          self.$store.commit("showScrolledData");
        })
        .on("leave", function() {
          self.$store.commit("hideScrolledData");
        });
      this.$ksvuescr.$emit("addScene", "triggerMenu", scene2);
    },
    pinContainerScene() {
      window.addEventListener("load", () => {
        let svgPath = document.querySelectorAll(".svg-test path");
        const tl = new TimelineLite();
        svgPath.forEach((el, index) => {
          if (index !== 1 && index !== 2 && index !== 3) {
            // Задаю рандомные значения для позиций каждого элемента в svg
            let left, top;
            if (window.matchMedia("(max-width:960px)").matches) {
              left = Math.floor(Math.random() * 200) - 100;
              top = Math.floor(Math.random() * 100) - 50;
            } else {
              left = Math.floor(Math.random() * 100) - 50;
              top = Math.floor(Math.random() * 50) - 25;
            }

            // Указываю стили с позицией
            tl.set(el, {
              transform: `translate(${left}vw,${top}vh)`
            });
            // Создаю аттрибуты и вставляю туда значения чтобы знать позиции,
            // и позже уменьшать их до нуля чтобы все элементы встали на свое место
            el.setAttribute("data-x", left);
            el.setAttribute("data-y", top);
          }
        });

        tl.set(".ct-welcome__description", {
          opacity: 0
        })
          .set(".svg-test #path2", {
            transform: "translate(-40vw, 10vh) rotate(-50deg)",
            opacity: 1
          })
          .set(".svg-test #path3", {
            transform: "translate(20vw, 50vh) rotate(-30deg)",
            opacity: 1
          })
          .set(".svg-test #path4", {
            transform: "translate(50vw, -40vh) rotate(80deg)",
            opacity: 1
          })
          .to(svgPath, 0.5, {
            transform: "translate(0,0)",
            delay: 0.5
          })
          .to(".ct-welcome__description", 0.5, {
            opacity: 1,
            transform: "translateY(0)"
          });
      });
    },
    created() {}
  }
};
</script>
