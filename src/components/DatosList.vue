<template>
    <v-data-table :headers="headers" :items="desserts" class="elevation-1" :search="search">
        <template v-slot:top>
            <v-toolbar>
                <v-toolbar-title>Configurar Datos de entrada</v-toolbar-title>
            </v-toolbar>
            <v-toolbar flat>
                <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ props }">

                        <v-dialog width="700">
                            <template v-slot:activator="{ props }">
                                <v-card-actions class="px-4 pb-3">
                                    <v-btn variant="elevated" color="primary" size="small" class="me-2" v-bind="props"
                                        @click="mostrarItem(item.raw)">
                                        Crear
                                    </v-btn>
                                </v-card-actions>
                            </template>

                            <DatoTabs />

                        </v-dialog>
                        <v-spacer></v-spacer>
                        <v-spacer></v-spacer>
                        <v-text-field color="primary" v-model="search" class="px-16" append-icon="mdi-magnify"
                            label="Buscar">
                        </v-text-field>

                    </template>

                    <v-card>
                        <v-card-title>
                            <span class="text-h5">{{ formTitle }}</span>
                        </v-card-title>

                        <v-card-text>
                            <v-container>
                                <v-row>

                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.entidad" label="Entidad"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.conjunto_de_datos"
                                            label="Conjunto de datos"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.tipo" label="Tipo"></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                        <v-card-actions class="justify-center">
                            <v-btn color="primary" :disabled="!form" variant="elevated">
                                Continuar
                            </v-btn>
                        </v-card-actions>
                    </v-card>

                </v-dialog>
                <v-dialog v-model="dialogDelete" max-width="500px">
                    <v-card>
                        <v-card-title class="text-h5">¿Está seguro de eliminar la entidad?</v-card-title>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue-darken-1" variant="text" @click="closeDelete">No</v-btn>
                            <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">Si</v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
            <v-icon size="small" class="me-2" @click="editItem(item.raw)">
                mdi-pencil

            </v-icon>
            <v-icon size="small" @click="deleteItem(item.raw)">
                mdi-delete
            </v-icon>
        </template>

        <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">
                Reestablecer
            </v-btn>

        </template>
    </v-data-table>
</template>

<script>
import DatoTabs from "./DatoTabs.vue"
export default {

    data: () => ({
        dialog: false,
        search: '',
        dialogDelete: false,

        headers: [
            {
                align: 'start',
                key: 'entidad',
                sortable: false,
                title: 'Entidad',
            },
            {
                align: 'start',
                key: 'conjunto_de_datos',
                sortable: false,
                title: 'Conjunto  de datos',
            },
            { title: 'Tipo', key: 'tipo' },
            { title: 'Acciones', key: 'actions', sortable: false },
        ],
        desserts: [],
        editedIndex: -1,
        editedItem: {
            entidad: '',
            conjunto_de_datos: '',
            tipo: "",
        },
        defaultItem: {
            entidad: '',
            conjunto_de_datos: '',
            dirección: "",
        },
        entidadItem: {
            entidad: '',
        },

    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? '' : 'Editar Entidad'
        },
    },

    watch: {
        dialog(val) {
            val || this.close()
        },
        dialogDelete(val) {
            val || this.closeDelete()
        },
    },

    created() {
        this.initialize()
    },

    methods: {

        initialize() {

            this.desserts = [
                {
                    entidad: 'Entidad 1',
                    conjunto_de_datos: 'Poblacion niños,Poblacion de niñas',
                    tipo: "Web servicie",
                },
                {
                    entidad: 'Entidad 2',
                    conjunto_de_datos: 'poblacion  de adolecentes',
                    tipo: "Formulario",
                },
                {
                    entidad: 'Entidad 3',
                    conjunto_de_datos: 'Trata y trafico',
                    tipo: "Archivo",
                },
            ]
        },
        mostrarItem(item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.entidadItem = Object.assign({}, item)
            this.dialog = false
        },

        editItem(item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem(item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },

        deleteItemConfirm() {
            this.desserts.splice(this.editedIndex, 1)
            this.closeDelete()
        },


        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        closeDelete() {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.desserts[this.editedIndex], this.editedItem)
            } else {
                this.desserts.push(this.editedItem)
            }
            this.close()
        },
    },

}
</script>