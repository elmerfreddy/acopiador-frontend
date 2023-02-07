<template>
  <v-app>
    <SideBar v-if="$store.state.usuario" />
    <v-main>
      <router-view />
    </v-main>
    <FooterBar v-if="$store.state.usuario" />
  </v-app>
</template>

<script>
import SideBar from "./components/SideBar.vue";
import FooterBar from "./components/FooterBar.vue";

export default {
  mounted() {
    this.$store.commit("initializeStore");
  },

  components: {
    SideBar,
    FooterBar,
  },
};
</script>
