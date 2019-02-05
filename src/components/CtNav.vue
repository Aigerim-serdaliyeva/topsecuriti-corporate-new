<template>
  <nav v-if="!isMobile()" id="nav" :class="{ nav_fixed: fixed }">
    <div class="logo">
      <router-link to="/" @click.native="visited('index')">
        <!-- logo в меню svg -->
        <nav-logo />
      </router-link>
    </div>
    <ul :class="visitedData">
      <li v-for="list in listsProp" :class="`nav-${list.path}`" :key="list.id">
        <router-link :to="`/${list.path}`" @click.native="visited(list.path)">
          {{ $t(`menu.${list.path}`) }}
        </router-link>
      </li>
      <!-- <li><router-link :to="switchLocalePath('ru')">Ru</router-link></li>
      <li><router-link :to="switchLocalePath('kz')">Kz</router-link></li> -->
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
    },
    isMobile() {
      if (window.matchMedia("(max-width:960px)").matches) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>
