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
    <v-list v-model:opened="open">
      <v-list-group value="Admin">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" title="Administración"></v-list-item>
        </template>

        <v-list-item
          v-for="([title, icon, pathName], i) in admins"
          :key="i"
          :title="title"
          :value="title"
          :to="pathName"
        ></v-list-item>
      </v-list-group>

      <v-list-group value="Datos">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" title="Datos"></v-list-item>
        </template>

        <v-list-item
          v-for="([title, icon, pathName], i) in datos"
          :key="i"
          :value="title"
          :title="title"
          :to="pathName"
        ></v-list-item>
      </v-list-group>

      <v-list-group value="Reportes">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" title="Reportes"></v-list-item>
        </template>

        <v-list-item
          v-for="([title, icon, pathName], i) in reportes"
          :key="i"
          :value="title"
          :title="title"
          :to="pathName"
        ></v-list-item>
      </v-list-group>

      <v-list-item title="Ayuda"></v-list-item>
      <v-list-item title="Logs"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    open: [],
    admins: [
      ["Usuarios", "mdi-account-multiple-outline", { name: "usuarios" }],
      ["Entidades", "mdi-cog-outline", { name: "entidades" }],
    ],
    datos: [
      ["Datos de entrada", "mdi-plus-outline", { name: "datos" }],
      ["Enviar datos entrada", "mdi-file-outline"],
      ["Formulario registro", "mdi-update"],
      ["Datos validados", "mdi-delete"],
      ["Enviar datos", "mdi-delete"],
    ],
    reportes: [
      ["Reporte 1", "mdi-plus-outline"],
      ["Reporte 2", "mdi-file-outline"],
    ],
    drawer: true,
    group: null,
    items: [
      { title: "Home", icon: "mdi-view-dashboard", path: "/dashboard" },
      { title: "Usuarios", icon: "mdi-account-box", path: "/usuarios" },
      {
        title: "Entidades",
        icon: "mdi-office-building-outline",
        path: "/entidades",
      },
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
      this.$store.commit("logout");
      this.$router.push({ name: "login" });
    },
  },
};
</script>
