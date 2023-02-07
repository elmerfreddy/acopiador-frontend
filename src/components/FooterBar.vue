<template>
  <v-footer border app>
    <div class="px-4 py-2 text-right w-100">
      <v-icon size="small" class="me-2"> mdi-account-circle </v-icon>
      <span>{{ this.$store.state.usuario }}</span>
    </div>
  </v-footer>
</template>
