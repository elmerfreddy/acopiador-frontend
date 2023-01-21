<template>
    <v-data-table :headers="headers" :items="desserts" class="elevation-1">
        <template v-slot:top>
            <v-toolbar flat>
                <v-toolbar-title>Lista de Usuarios</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ props }">
                        <v-btn color="primary" dark class="mb-2" v-bind="props">
                            Crear Usuario
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="text-h5">{{ formTitle }}</span>
                        </v-card-title>

                        <v-card-text>

                            <v-container>
                                <v-row>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.nombres" label="Nombre(s)"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.apellidos" label="Apellido(s)"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.correo" label="Correo"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.celular" label="Celular"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.entidad" label="Entidad"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.cargo" label="Cargo"></v-text-field>
                                    </v-col>
                                </v-row>
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
                        <v-card-title class="text-h5">¿Está seguro de eliminar el usuario?</v-card-title>
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

            <v-dialog  max-width="500px">
                    <template v-slot:activator="{ props }">
                        <v-icon size="small" class="me-2" v-bind="props">
                           mdi-eye
                        </v-icon>
                    </template>
                    
                            <v-container class="fill-height" fluid>
                             <v-row align="center" justify="center">
                            <v-col cols="12" sm="8" md="9">
                                <v-card class="elevation-12">
                                    <v-window v-model="step">
                                            <v-row>
                                                <v-col cols="12" md="11">
                                                    <v-card-text class="mt-0">
                                                        <h1
                                                         class=" color text-center display-2 darken-4text"
                                                        >Perfil de Usuario</h1>
                                                        <br>
                                                        <label for="exampleInputEmail1" class="form-label"> Nombre:</label>
                                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                                        placeholder="defreddyelmer@gmail.com">
                                                        <br>
                                                        <label for="exampleInputEmail1" class="form-label">Apellido:</label>
                                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                                        placeholder="defreddyelmer@gmail.com">
                                                        <br>
                                                        <label for="exampleInputEmail1" class="form-label">Entidad:</label>
                                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                                        placeholder="defreddyelmer@gmail.com">
                                                        <v-divider ></v-divider>
                                                        <h4
                                                        class=" col text-left display-2 teal--text text--accent-3"
                                                        >Cambiar Contraseña</h4>
                                                        <v-form>
                                                            <v-text-field
                                                                label="Anterior Contraseña"
                                                                name="Anterior Contraseña"
                                                                prepend-icon="email"
                                                                type="text"
                                                                color="brown darken-4"
                                                            />
  
                                                            <v-text-field
                                                                id="password"
                                                                label="Nueva Contraeña"
                                                                name="Nueva Contraeña"
                                                                prepend-icon="lock"
                                                                type="password"
                                                                color="brown darken-4"
                                                            />

                                                            <v-text-field
                                                                id="password"
                                                                label="Repita Nueva Contraseña"
                                                                name="Repita Nueva Contraseña"
                                                                prepend-icon="lock"
                                                                type="password"
                                                                color="brown darken-4"
                                                            />
                                                        </v-form>
                                                    </v-card-text>
                                                    <div class="text-center mt-1">
                                                        <v-btn rounded color="red darken-2" dark>Guardar</v-btn>
                                                    </div>
                                                </v-col>
                                            </v-row>
                                       
                                    </v-window>
                                </v-card>
                            </v-col>
                            </v-row>
                            </v-container>            
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

export default {
    data: () => ({
        dialog: false,
        dialogDelete: false,
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
            { title: 'Correo', key: 'correo' },
            { title: 'Entidad', key: 'entidad' },
            { title: 'Acciones', key: 'actions', sortable: false },
        ],
        desserts: [],
        editedIndex: -1,
        editedItem: {
            nombres: '',
            apellidos: '',
            correo: "",
            celular: "",
            entidad: "",
            cargo: "",
        },
        defaultItem: {
            nombres: '',
            apellidos: '',
            correo: "",
            celular: "",
            entidad: "",
            cargo: "",
        },
        vistaItem:{
            nombres: '',
            apellidos: '',
            entidad: "",
        }

    }),
 
    computed: {
        formTitle() {
            return this.editedIndex === 1 ? 'Nuevo Usuario' : 'Editar Usuario'
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
                    nombres: 'Juan Alberto',
                    apellidos: 'Perez Rojas',
                    correo: "juanalberto.perez@gmail.com",
                    celular: "70231412",
                    entidad: "Entidad 1",
                    cargo: "Técnico de Digitalización y Estadística",
                },
                {
                    nombres: 'Pepito',
                    apellidos: 'Palotes',
                    correo: "pepito.palotes@gmail.com",
                    celular: "71912345",
                    entidad: "Entidad 2",
                    cargo: "Profesional Estadístico",
                },
            ]
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