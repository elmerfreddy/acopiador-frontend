<template>
  <v-data-table
    :headers="headers"
    :items="datos"
    class="elevation-1"
    :search="search"
  >
    <template v-slot:top>
      <v-toolbar>
        <v-toolbar-title>Enviar Datos</v-toolbar-title>
      </v-toolbar>
      <v-toolbar flat>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-text-field
          color="primary"
          v-model="search"
          append-icon="mdi-magnify"
          label="Buscar"
        >
        </v-text-field>

        <v-dialog v-model="dialogConfig" max-width="750px">
          <v-card>
            <v-card-title>
              <span class="text-h5">Subir Archivo</span>
            </v-card-title>

            <v-card-text>
              <v-file-input
                accept="application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                label="Subir archivo del conjunto de datos"
                prepend-icon="mdi-file-excel"
              ></v-file-input>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="dialogConfig = false"
              >
                Cancelar
              </v-btn>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="subirArchivo()"
              >
                Guardar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon size="small" @click="configurarItem(item.raw)">
        mdi-upload
      </v-icon>
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
    /* dialog: false, */
    search: "",
    /* dialogDelete: false,
    dialogShow: false, */
    dialogConfig: false,
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
        title: "Conjunto de datos",
      },
      { title: "Tipo", key: "tipo" },
      { title: "Acciones", key: "actions", sortable: false },
    ],
    datos: [],
    /* editedIndex: -1,
    editedItem: {
      entidad: "",
      conjunto_de_datos: "",
      tipo: "",
      archivoExcel: null,
    },
    defaultItem: {
      entidad: "",
      conjunto_de_datos: "",
      tipo: "",
      archivoExcel: null,
    },
    muestraItem: {
      entidad: "",
      conjunto_de_datos: "",
      tipo: "",
      archivoExcel: null,
    },
    itemVariables: {
      atributo: "",
      tipo: "",
      ejemplo: "",
      metrica: "",
    },
    defaultItemVariables: {
      atributo: "",
      tipo: "",
      ejemplo: "",
      metrica: "",
    }, */
  }),

  /* computed: {
    formTitle() {
      return this.editedIndex === -1
        ? "Crear Datos de Entrada"
        : "Editar Datos de Entrada";
    },
  }, */

  /* watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  }, */

  created() {
    this.initialize();
  },

  methods: {
    /*async initialize() {
      try {
        const respuesta = await axios.get("/api/datos");
        this.datos = respuesta.data;
      } catch (error) {
        throw new Error(error);
      }
    },*/
    initialize() {
      this.datos = [
        {
          entidad: "Entidad 1",
          conjunto_de_datos: "Población de niños",
          tipo: "Web Service",
          archivoExcel: null,
        },
        {
          entidad: "Entidad 1",
          conjunto_de_datos: "Población de adolescentes",
          tipo: "Archivo",
          archivoExcel: null,
        },
        {
          entidad: "Entidad 2",
          conjunto_de_datos: "Trata y tráfico",
          tipo: "Archivo",
          archivoExcel: null,
        },
      ];
    },

    /* submitVariables() {
      if (this.editedIndex > -1) {
        Object.assign(
          this.muestraItem.variables[this.editedIndex],
          this.itemVariables
        );
      } else {
        this.muestraItem.variables.push(this.itemVariables);
      }
      this.itemVariables = Object.assign({}, this.defaultItemVariables);
    },
 */
    subirArchivo() {
      this.dialogConfig = false;
    },

    /* mostrarItem(item) {
      this.editedIndex = this.datos.indexOf(item);
      this.muestraItem = Object.assign({}, item);
      this.dialog = false;
    },

    configurarItem(item) {
      this.editedIndex = this.datos.indexOf(item);
      this.muestraItem = Object.assign({}, item);
      this.dialogConfig = true;
    },

    editItemVariable(item) {
      this.editedIndex = this.muestraItem.variables.indexOf(item);
      this.itemVariables = Object.assign({}, item);
    },

    deleteItemVariable(item) {
      this.editedIndex = this.muestraItem.variables.indexOf(item);
      this.muestraItem.variables.splice(this.editedIndex, 1);
      this.closeDelete();
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
    }, */
  },
};
</script>
