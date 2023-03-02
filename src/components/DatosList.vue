<template>
  <v-data-table
    :headers="headers"
    :items="datos"
    class="elevation-1"
    :search="search"
  >
    <template v-slot:top>
      <v-toolbar>
        <v-toolbar-title>Configurar Datos de entrada</v-toolbar-title>
      </v-toolbar>
      <v-toolbar flat>
        <v-dialog v-model="dialog" width="auto">
          <template v-slot:activator="{ props }">
            <v-card-actions class="px-4 pb-3">
              <v-btn
                variant="elevated"
                color="primary"
                dark
                class="center"
                v-bind="props"
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
          <DatoTabs />
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
import DatoTabs from "./DatoTabs.vue";
export default {
  data: () => ({
    dialog: false,
    search: "",
    dialogDelete: false,

    headers: [
      {
        align: "start",
        key: "entidad",
        sortable: false,
        title: "Entidad",
      },
      {
        align: "start",
        key: "conjunto_de_datos",
        sortable: false,
        title: "Conjunto  de datos",
      },
      { title: "Tipo", key: "tipo" },
      { title: "Acciones", key: "actions", sortable: false },
    ],
    datos: [],
    editedIndex: -1,
    editedItem: {
      entidad: "",
      conjunto_de_datos: "",
      tipo: "",
    },
    defaultItem: {
      entidad: "",
      conjunto_de_datos: "",
      dirección: "",
    },
    entidadItem: {
      entidad: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "" : "Editar Entidad";
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
      this.datos = [
        {
          entidad: "Entidad 1",
          conjunto_de_datos: "Población de varones, Población de niños",
          tipo: "Web Service",
        },
        {
          entidad: "Entidad 2",
          conjunto_de_datos: "Población de adolescentes",
          tipo: "Formulario",
        },
        {
          entidad: "Entidad 3",
          conjunto_de_datos: "Población de mujeres",
          tipo: "Archivo",
        },
      ];
    },

    mostrarItem(item) {
      this.editedIndex = this.datos.indexOf(item);
      this.entidadItem = Object.assign({}, item);
      this.dialog = false;
    },

    editItem(item) {
      this.editedIndex = this.datos.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.datos.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.datos.splice(this.editedIndex, 1);
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
        Object.assign(this.datos[this.editedIndex], this.editedItem);
      } else {
        this.datos.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
