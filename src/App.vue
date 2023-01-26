<template>
  <v-app>
    <SideBar />
    <v-main>
      <router-view />
    </v-main>
    <FooterBar />
  </v-app>
</template>

<script setup>
import SideBar from "./components/SideBar.vue";
import FooterBar from "./components/FooterBar.vue";
</script>

