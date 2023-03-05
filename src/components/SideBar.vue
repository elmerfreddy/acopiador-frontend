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

  <v-navigation-drawer v-model="drawer" location="left" color="grey-lighten-4">
    <v-list v-model:opened="open" nav>
      <v-list-item
        title="Principal"
        :to="{ name: 'dashboard' }"
        active-color="primary"
        prepend-icon="mdi-home"
      ></v-list-item>
      <v-list-group value="Admin">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            title="Administración"
            active-color="primary"
            prepend-icon="mdi-clipboard-list-outline"
          ></v-list-item>
        </template>

        <v-list-item
          v-for="([title, icon, pathName], i) in admins"
          :key="i"
          :title="title"
          :value="title"
          :to="pathName"
          active-color="primary"
          :prepend-icon="icon"
        ></v-list-item>
      </v-list-group>

      <v-list-group value="Datos">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            title="Datos"
            active-color="primary"
            prepend-icon="mdi-database-cog"
          ></v-list-item>
        </template>

        <v-list-item
          v-for="([title, icon, pathName], i) in datos"
          :key="i"
          :value="title"
          :title="title"
          :to="pathName"
          active-color="primary"
          :prepend-icon="icon"
        ></v-list-item>
      </v-list-group>

      <v-list-group value="Reportes">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            title="Reportes"
            active-color="primary"
            prepend-icon="mdi-chart-box-outline"
          ></v-list-item>
        </template>

        <v-list-item
          v-for="([title, icon, pathName], i) in reportes"
          :key="i"
          :value="title"
          :title="title"
          :to="pathName"
          active-color="primary"
          :prepend-icon="icon"
        ></v-list-item>
      </v-list-group>

      <v-list-item
        title="Ayuda"
        active-color="primary"
        prepend-icon="mdi-help-box"
      ></v-list-item>
      <v-list-item
        title="Logs"
        active-color="primary"
        prepend-icon="mdi-format-list-bulleted"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    open: [],
    admins: [
      ["Usuarios", "mdi-account-multiple-outline", { name: "usuarios" }],
      ["Entidades", "mdi-office-building", { name: "entidades" }],
    ],
    datos: [
      ["Datos de entrada", "mdi-plus-outline", { name: "datos" }],
      ["Enviar datos entrada", "mdi-file-outline"],
      ["Formulario registro", "mdi-update"],
      ["Datos validados", "mdi-file-check"],
      ["Enviar datos", "mdi-send", { name: "enviar_datos" }],
    ],
    reportes: [
      ["Reporte 1", "mdi-chart-bar"],
      ["Reporte 2", "mdi-chart-pie"],
    ],
    drawer: true,
  }),

  methods: {
    logout() {
      this.$store.commit("logout");
      this.$router.push({ name: "login" });
    },
  },
};
</script>
