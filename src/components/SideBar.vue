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
        <v-list :items="items"></v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    data: () => ({
        drawer: true,
        group: null,
        items: [
            {
                title: 'Usuarios',
                value: 'usuarios',
            },
            {
                title: 'Entidades',
                value: 'entidades',
            },
        ],
    }),

    watch: {
        group() {
            this.drawer = false
        },
    },
}
</script>