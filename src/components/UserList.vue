<template>
    <v-card>
        <v-card-title>
            <h2>Lista de usuarios</h2>
            <v-spacer></v-spacer>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line
                hide-details></v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" :items="desserts" :search="search"></v-data-table>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            search: '',
            headers: [
                {
                    align: 'start',
                    key: 'nombres',
                    sortable: false,
                    title: 'Nombre(s)',
                },
                {
                    align: 'start',
                    key: 'apellidos',
                    sortable: false,
                    title: 'Apellido(s)',
                },
                { key: 'correo', title: 'Correo' },
                { key: 'entidad', title: 'Entidad' },
                { key: 'acciones', title: 'Acciones' },
            ],
            desserts: [
                {
                    nombres: 'Juan Alberto',
                    apellidos: 'Perez Rojas',
                    correo: 'juanalberto.perez@gmail.com',
                    celular: '70231412',
                    entidad: 'Entidad 1',
                    cargo: 'Técnico de Digitalización y Estadística',
                },
                {
                    nombres: 'Pepito',
                    apellidos: 'Palotes',
                    correo: 'pepito.palotes@gmail.com',
                    celular: '71912345',
                    entidad: 'Entidad 2',
                    cargo: 'Profesional Estadístico',
                },
            ],
        }
    },
}
</script>