<template>
    <v-data-table :headers="headers" :items="desserts" class="elevation-1" :search="search">

        <template v-slot:top>
            <v-toolbar>
                <v-toolbar-title>Entidades</v-toolbar-title>
            </v-toolbar>
            <v-toolbar flat>
                <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ props }">
                        <v-card-actions class="px-4 pb-3">
                            <v-btn variant="elevated" color="primary" dark v-bind="props" :class="center">
                                Crear
                            </v-btn>
                        </v-card-actions>
                        <v-spacer></v-spacer>
                        <v-spacer></v-spacer>
                        <v-text-field 
                        color="primary" 
                        v-model="search" 
                        append-icon="mdi-magnify" 
                        label="Buscar">
                        </v-text-field>
                        <v-spacer></v-spacer>
                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="text-h5">{{ formTitle }}</span>
                        </v-card-title>

                        <v-card-text>

                            <v-container>
                                <v-row>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.sigla" label="Sigla"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.dirección" label="Dirección"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-combobox label="Nivel de Acceso"
                                    :items="['Tipo A', 'Tipo B', 'Tipo C', 'Tipo D', 'Tipo E',]">
                                </v-combobox>
                            </v-container>

                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue-darken-1" variant="text" @click="close">
                                Cancelar
                            </v-btn>
                            <v-btn color="blue-darken-1" variant="text" @click="save">
                                Guardar
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
            <v-dialog max-width="500px">
                <template v-slot:activator="{ props }">
                    <v-icon size="small" class="me-2" v-bind="props" @click="mostrarItem(item.raw)">
                        mdi-key
                    </v-icon>
                </template>
                <v-card max-width="400">
                    <v-card-title>Otorgar Permisos</v-card-title>

                    <v-col align-self="center">
                        <v-card-text class="mt-0">



                            <v-col>

                                <v-text-field v-model="entidadItem.name" label="Entidad" readonly></v-text-field>
                            </v-col>
                            <v-col>
                                <v-combobox label="Conjuntos de datos"
                                    :items="['Tipo A', 'Tipo B', 'Tipo C', 'Tipo D', 'Tipo E',]">
                                </v-combobox>
                            </v-col>
                            <v-col>
                                <v-combobox label="Nivel de desagregación"
                                    :items="['Tipo A', 'Tipo B', 'Tipo C', 'Tipo D', 'Tipo E',]">
                                </v-combobox>
                            </v-col>
                            <v-card-actions class="justify-center">
                                <v-btn color="primary" :disabled="!form" variant="elevated">
                                    Guardar
                                </v-btn>
                            </v-card-actions>



                        </v-card-text>
                    </v-col>
                </v-card>
            </v-dialog>

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
import CambiarPassword from "./CambiarPassword.vue"
export default {

    data: () => ({
        dialog: false,
        search: '',
        dialogDelete: false,

        headers: [
            {
                align: 'start',
                key: 'name',
                sortable: false,
                title: 'Name',
            },
            {
                align: 'start',
                key: 'sigla',
                sortable: false,
                title: 'Sigla',
            },
            { title: 'Dirección', key: 'dirección' },
            { title: 'Acciones', key: 'actions', sortable: false },
        ],
        desserts: [],
        editedIndex: -1,
        editedItem: {
            name: '',
            sigla: '',
            dirección: "",
        },
        defaultItem: {
            name: '',
            sigla: '',
            dirección: "",
        },
        entidadItem: {
            name: '',
        },

    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'Nuevo Entidad' : 'Editar Entidad'
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
            search: '',
                this.desserts = [
                    {
                        name: 'Entidad 1',
                        sigla: 'E1',
                        dirección: "Av.11",
                    },
                    {
                        name: 'Entidad 2',
                        sigla: 'E2',
                        dirección: "Av.22",
                    },
                    {
                        name: 'Entidad 3',
                        sigla: 'E3',
                        dirección: "Av.33",
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