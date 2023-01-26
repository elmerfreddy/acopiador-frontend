<template>
   <v-col
   col="11"
    md="11"
    >
    <v-card-title>Cambiar Contraseña</v-card-title>
    <v-form>
        <v-text-field label="Anterior Contraseña" name="Anterior Contraseña" prepend-icon="email" type="text"
            color="brown darken-4" />

        <v-text-field id="password" label="Nueva Contraeña" name="Nueva Contraeña" prepend-icon="lock" type="password"
            color="brown darken-4" />

        <v-text-field id="password" label="Repita Nueva Contraseña" name="Repita Nueva Contraseña" prepend-icon="lock"
            type="password" color="brown darken-4" />
    </v-form>
   </v-col>
</template>
<script>
export default {
    data: () => ({
        drawer: true,
        group: null,
        items: [
            { title: 'Home', icon: 'mdi-view-dashboard', path: '/' },
            { title: 'Usuarios', icon: 'mdi-account-box', path: '/users' },
        ],
    }),
}
</script>