<template>
  <nav v-if="!$isMobile()" id="nav" :class="{ nav_fixed: fixed }">
    <div class="logo">
      <router-link :class="visitedData" to="/" @click.native="visited('index')">
        <!-- logo в меню svg -->
        <nav-logo />
      </router-link>
    </div>
    <ul :class="visitedData">
      <li
        v-for="list in listsProp"
        :class="[`nav-${list.path}`, 'nav-item']"
        :key="list.id"
      >
        <router-link :to="`/${list.path}`" @click.native="visited(list.path)">
          {{ $t(`menu.${list.path}`) }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
import NavLogo from "./svg-components/NavLogo";

export default {
  components: {
    NavLogo
  },
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
  },
  watch: {
    visitedData(val) {
      localStorage.name = val;
    }
  }
};
</script>
