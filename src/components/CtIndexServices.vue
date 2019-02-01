<template>
  <section class="ct-index__services">
    <h2>НАШИ ПРОДУКТЫ</h2>
    <ul class="primary-list">
      <li
        v-for="(item, index) in componentsList"
        :key="index"
        @click="changeComponent(item.name)"
        :class="{ visited: item.name === currentComponent }"
      >
        {{ item.text }}
      </li>
    </ul>
    <component :is="currentComponent" />
  </section>
</template>

<script>
import Individuals from "@/components/services/Individuals.vue";
import LegalEntities from "@/components/services/LegalEntities.vue";
import PrivateSecurity from "@/components/services/PrivateSecurity.vue";

export default {
  components: {
    Individuals,
    LegalEntities,
    PrivateSecurity
  },
  data() {
    return {
      currentComponent: "Individuals",
      componentsList: [
        { name: "Individuals", text: "Физические лица" },
        { name: "LegalEntities", text: "Юридические лица" },
        { name: "PrivateSecurity", text: "Частная охрана" }
      ]
    };
  },
  methods: {
    changeComponent(comp) {
      this.currentComponent = comp;
    }
  }
};
</script>
