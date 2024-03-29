<template>
  <v-data-table
    :headers="headers"
    :items="usuarios"
    class="elevation-1"
    :search="search"
  >
    <template v-slot:top>
      <v-toolbar>
        <v-toolbar-title><h2>Lista de Usuarios</h2></v-toolbar-title>
      </v-toolbar>
      <v-toolbar flat>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ props }">
            <v-card-actions class="px-4 pb-3">
              <v-btn
                variant="elevated"
                color="primary"
                dark
                v-bind="props"
                class="center"
              >
                Crear
              </v-btn>
            </v-card-actions>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              class="px-16"
              color="primary"
              append-icon="mdi-magnify"
              label="Buscar"
            >
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
                    <v-text-field
                      v-model="editedItem.nombre"
                      label="Nombre(s)"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.apellido"
                      label="Apellido(s)"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.email"
                      label="email"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.rol"
                      label="Rol"
                    ></v-text-field>
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
            <v-card-title class="text-h5"
              >¿Está seguro de eliminar el usuario?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="closeDelete"
                >No</v-btn
              >
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="deleteItemConfirm"
                >Si</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-dialog max-width="500px">
        <template v-slot:activator="{ props }">
          <v-icon
            size="small"
            class="me-2"
            v-bind="props"
            @click="mostrarItem(item.raw)"
          >
            mdi-eye
          </v-icon>
        </template>
        <v-card max-width="400">
          <v-card-title>Perfil de Usuario</v-card-title>

          <v-col align-self="center">
            <v-card-text class="mt-0">
              <v-col>
                <v-text-field
                  v-model="muestraItem.nombre"
                  label="Nombre(s)"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="muestraItem.apellido"
                  label="Apellido(s)"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="muestraItem.rol"
                  label="Rol"
                  readonly
                ></v-text-field>
              </v-col>
              <v-divider></v-divider>
            </v-card-text>
          </v-col>
          <CambiarPassword />
        </v-card>
      </v-dialog>

      <v-icon size="small" class="me-2" @click="editItem(item.raw)">
        mdi-pencil
      </v-icon>
      <v-icon size="small" @click="deleteItem(item.raw)"> mdi-delete </v-icon>
    </template>

    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reestablecer </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import axios from "axios";
import CambiarPassword from "./CambiarPassword.vue";

export default {
  data: () => ({
    dialog: false,
    search: "",
    dialogDelete: false,
    headers: [
      {
        align: "start",
        key: "nombre",
        sortable: false,
        title: "Nombre(s)",
      },
      {
        align: "start",
        key: "apellido",
        sortable: false,
        title: "Apellido(s)",
      },
      { title: "Email", key: "email" },
      { title: "Rol", key: "rol" },
      { title: "Acciones", key: "actions", sortable: false },
    ],
    usuarios: [],
    editedIndex: -1,
    editedItem: {
      nombre: "",
      apellido: "",
      email: "",
      celular: "",
      rol: "",
      cargo: "",
    },
    defaultItem: {
      nombre: "",
      apellido: "",
      email: "",
      celular: "",
      rol: "",
      cargo: "",
    },
    muestraItem: {
      nombre: "",
      apellido: "",
      rol: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo Usuario" : "Editar Usuario";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    /*async initialize() {
      try {
        const respuesta = await axios.get("/api/usuarios");
        this.usuarios = respuesta.data;
      } catch (error) {
        throw new Error(error);
      }
    },*/
    initialize() {
      this.usuarios = [
        {
          id: 4,
          id_entidad: 1,
          nombre: "Roberto",
          apellido: "Zediño",
          cargo: "tecnico 77",
          celular: "7774455",
          email: "qq@77.q",
          entidad: "Entidad 1",
          estado: "ACTIVO",
          rol: "USER1",
        },
        {
          id: 5,
          id_entidad: 1,
          nombre: "Osvaldo",
          apellido: "Covaruvias",
          cargo: "tecnico 88",
          celular: "717171717",
          email: "qq@88.q",
          entidad: "Entidad 2",
          estado: "ACTIVO",
          rol: "USER1",
        },
      ];
    },

    mostrarItem(item) {
      this.editedIndex = this.usuarios.indexOf(item);
      this.muestraItem = Object.assign({}, item);
      this.dialog = false;
    },

    editItem(item) {
      this.editedIndex = this.usuarios.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.usuarios.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.usuarios.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.usuarios[this.editedIndex], this.editedItem);
      } else {
        this.usuarios.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
