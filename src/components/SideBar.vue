<template>
    <v-app-bar color="primary" prominent>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Sistema Reportes Estadísticos</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn variant="text" icon="mdi-magnify"></v-btn>
        <v-btn variant="text" icon="mdi-filter"></v-btn>
        <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" location="left">
        <v-list density="compact">
            <v-list-subheader>ADMINISTRACIÓN</v-list-subheader>

            <v-list-item v-for="(item, i) in items" :key="i" :value="item" active-color="primary" :to="item.path">
                <template v-slot:prepend>
                    <v-icon :icon="item.icon"></v-icon>
                </template>

                <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item>
        </v-list>

        <template v-slot:append>
            <div class="pa-2">
                <v-btn block>
                    Cerrar sesión
                </v-btn>
            </div>
        </template>
    </v-navigation-drawer>
</template>

<script>
export default {
    data: () => ({
        drawer: true,
        group: null,
        items: [
            { title: 'Home', icon: 'mdi-view-dashboard', path: '/'},
            { title: 'Usuarios', icon: 'mdi-account-box', path: '/users' },
        ],
    }),

    watch: {
        group() {
            this.drawer = false
        },
    },
}
</script>