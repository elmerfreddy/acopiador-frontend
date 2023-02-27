<template>
  <v-data-table
    :headers="headers"
    :items="entidades"
    class="elevation-1"
    :search="search"
  >
    <template v-slot:top>
      <v-toolbar>
        <v-toolbar-title>Lista de Entidades</v-toolbar-title>
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
              color="primary"
              v-model="search"
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
                      label="Nombre"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.sigla"
                      label="Sigla"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.estado"
                      label="Estado"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-combobox
                  label="Nivel de Acceso"
                  :items="[
                    'Nivel 1 - Administrador',
                    'Nivel 2 - Acceder a toda la información',
                    'Nivel 3 - Datos de su entidad',
                  ]"
                >
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
            <v-card-title class="text-h5"
              >¿Está seguro de eliminar la entidad?</v-card-title
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
            @click="permisosItem(item.raw)"
          >
            mdi-key
          </v-icon>
        </template>
        <v-card max-width="400">
          <v-card-title>Otorgar Permisos</v-card-title>

          <v-col align-self="center">
            <v-card-text class="mt-0">
              <v-col>
                <v-text-field
                  v-model="entidadItem.nombre"
                  label="Entidad"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col>
                <v-combobox
                  label="Conjuntos de datos"
                  :items="[
                    'Estadistica de Edades',
                    'Población de varones',
                    'Población de mujeres',
                    'Población de niños',
                    'Población de adolescentes',
                    'Generacional (género)',
                    'Etnia',
                  ]"
                >
                </v-combobox>
              </v-col>
              <v-col>
                <v-combobox
                  label="Nivel de desagregación"
                  :items="['Nacional', 'Departamental', 'Municipal']"
                >
                </v-combobox>
              </v-col>
              <v-card-actions class="justify-center">
                <v-btn color="primary" variant="elevated"> Guardar </v-btn>
              </v-card-actions>
            </v-card-text>
          </v-col>
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
        title: "Nombre",
      },
      {
        align: "start",
        key: "sigla",
        sortable: false,
        title: "Sigla",
      },
      { title: "Estado", key: "estado" },
      { title: "Acciones", key: "actions", sortable: false },
    ],
    entidades: [],
    editedIndex: -1,
    editedItem: {
      id: "",
      nombre: "",
      sigla: "",
      estado: "",
    },
    defaultItem: {
      id: "",
      nombre: "",
      sigla: "",
      estado: "",
    },
    entidadItem: {
      id: "",
      nombre: "",
      sigla: "",
      estado: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo Entidad" : "Editar Entidad";
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
        const respuesta = await axios.get("/api/entidades");
        this.entidades = respuesta.data;
      } catch (error) {
        throw new Error(error);
      }
    },*/
    initialize() {
      this.entidades = [
        {
          id: 1,
          nombre: "Entidad 1",
          sigla: "E1",
          estado: "ACTIVO",
        },
        {
          id: 2,
          nombre: "Entidad 2",
          sigla: "E2",
          estado: "ACTIVO",
        },
        {
          id: 3,
          nombre: "Entidad 3",
          sigla: "E3",
          estado: "ACTIVO",
        },
      ];
    },
    permisosItem(item) {
      this.editedIndex = this.entidades.indexOf(item);
      this.entidadItem = Object.assign({}, item);
      this.dialog = false;
    },

    editItem(item) {
      this.editedIndex = this.entidades.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.entidades.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.entidades.splice(this.editedIndex, 1);
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
        Object.assign(this.entidades[this.editedIndex], this.editedItem);
      } else {
        this.entidades.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
