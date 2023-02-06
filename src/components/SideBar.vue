<template>
  <v-app-bar color="primary" prominent>
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>
    <v-toolbar-title>Sistema Reportes Estadísticos</v-toolbar-title>
    <v-spacer></v-spacer>
    <template v-slot:append v-if="$store.state.usuario">
      <div class="pa-2">
        <v-btn block @click="logout">Cerrar sesión</v-btn>
      </div>
    </template>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="left">
    <v-list density="compact">
      <v-list-subheader>ADMINISTRACIÓN</v-list-subheader>

      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        active-color="primary"
        :to="item.path"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title v-text="item.title"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    group: null,
    items: [
      { title: "Home", icon: "mdi-view-dashboard", path: "/" },
      { title: "Usuarios", icon: "mdi-account-box", path: "/users" },
      { title: "Entidades", icon: "mdi-office-building-outline", path: "/entidad" },
      { title: "Datos", icon: "mdi-database-cog", path: "/datos" },
    ],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },

  methods: {
    logout() {
      this.$store.commit('logout');
      this.$router.push('/login');
    },
  },
};
</script>
