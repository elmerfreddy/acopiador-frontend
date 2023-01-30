<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    class="elevation-1"
    :search="search"
  >
    <template v-slot:top>
      <v-toolbar>
        <v-toolbar-title>Lista de Usuarios</v-toolbar-title>
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
                :class="center"
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
                      v-model="editedItem.nombres"
                      label="Nombre(ssssssssssssss)"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.apellidos"
                      label="Apellido(s)"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.correo"
                      label="Correo"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.celular"
                      label="Celular"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.entidad"
                      label="Entidad"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.cargo"
                      label="Cargo"
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
                  v-model="muestraItem.nombres"
                  label="Nombre(s)"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="muestraItem.apellidos"
                  label="Apellido(s)"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="muestraItem.cargo"
                  label="Cargo"
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
import CambiarPassword from "./CambiarPassword.vue";
export default {
  data: () => ({
    dialog: false,
    search: "",
    dialogDelete: false,
    headers: [
      {
        align: "start",
        key: "nombres",
        sortable: false,
        title: "Nombre(s)",
      },
      {
        align: "start",
        key: "apellidos",
        sortable: false,
        title: "Apellido(s)",
      },
      { title: "Correo", key: "correo" },
      { title: "Entidad", key: "entidad" },
      { title: "Acciones", key: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      nombres: "",
      apellidos: "",
      correo: "",
      celular: "",
      entidad: "",
      cargo: "",
    },
    defaultItem: {
      nombres: "",
      apellidos: "",
      correo: "",
      celular: "",
      entidad: "",
      cargo: "",
    },
    muestraItem: {
      nombres: "",
      apellidos: "",
      cargo: "",
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
    initialize() {
      this.desserts = [
        {
          nombres: "Juan Alberto",
          apellidos: "Perez Rojas",
          correo: "juanalberto.perez@gmail.com",
          celular: "70231412",
          entidad: "Entidad 1",
          cargo: "Técnico de Digitalización y Estadística",
        },
        {
          nombres: "Pepito",
          apellidos: "Palotes",
          correo: "pepito.palotes@gmail.com",
          celular: "71912345",
          entidad: "Entidad 2",
          cargo: "Profesional Estadístico",
        },
      ];
    },
    mostrarItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.muestraItem = Object.assign({}, item);
      this.dialog = false;
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
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
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
