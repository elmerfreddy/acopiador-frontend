<template>
  <v-app-bar color="primary" prominent>
    <v-toolbar-title>SYSEA</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn variant="text">EVENTOS</v-btn>

      <v-divider vertical></v-divider>

      <v-btn variant="text">CERTIFICADOS</v-btn>

      <v-divider vertical></v-divider>
      <v-btn variant="text">MATERIAL DE EXPOSICIÓN</v-btn>

      <v-divider vertical></v-divider>
      <v-btn variant="text">AMBIENTE</v-btn>
      <v-divider vertical></v-divider>
    </v-toolbar-items>
        <Avatar />
  </v-app-bar>
</template>
<script>
import Avatar from "./Avatar.vue";
export default {
  data: () => ({
    open: [],
    drawer: true,
  }),

  methods: {
    logout() {
      this.$store.commit("logout");
      this.$router.push({ name: "login" });
    },
  },
  components: {
    Avatar,
  },
};
</script>
  