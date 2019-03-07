<template>
  <nav v-if="!isMobile" id="nav" :class="{ nav_fixed: fixed }">
    <ul :class="visitedData">
      <li
        v-for="(list, index) in listsProp"
        :class="[{ nav_active_yellow: visitedData === list.path }, 'nav-item']"
        :key="index"
      >
        <router-link :to="`/${list.path}`" @click.native="visited(list.path)">
          {{ list.ru }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: {
    listsProp: {
      type: Array,
      required: true
    },
    fixed: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    visitedData() {
      return this.$store.state.visitedData;
    }
  },
  methods: {
    visited(path) {
      this.$store.commit("changeVisitedData", path);
    }
  }
};
</script>
