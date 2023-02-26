<template>
  <v-data-table
    :headers="headers"
    :items="datos"
    class="elevation-1"
    :search="search"
  >
    <template v-slot:top>
      <v-toolbar>
        <v-toolbar-title>Configurar Datos de Entrada</v-toolbar-title>
      </v-toolbar>
      <v-toolbar flat>
        <v-dialog v-model="dialog" max-width="750px">
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
              <v-form>
                <v-combobox
                  label="Seleccionar entidad"
                  v-model="editedItem.entidad"
                  :items="['Entidad 1', 'Entidad 2', 'Entidad 3']"
                ></v-combobox>
                <v-combobox
                  label="Seleccionar conjunto de datos"
                  v-model="editedItem.conjunto_de_datos"
                  :items="[
                    'Estadística de edades',
                    'Población de varones',
                    'Población de mujeres',
                    'Población de niños',
                    'Población de adolescentes',
                    'Generacional (género)',
                    'Etnias',
                  ]"
                ></v-combobox>
                <v-combobox
                  label="Seleccionar tipo"
                  v-model="editedItem.tipo"
                  :items="['Web Service', 'Formulario', 'Archivo']"
                ></v-combobox>
              </v-form>
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
        <v-dialog v-model="dialogDelete" max-width="750px">
          <v-card>
            <v-card-title align="center">
              <span class="text-h5"
                >¿Está seguro de eliminar el dato de entrada?</span
              >
            </v-card-title>

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
      <v-dialog v-model="dialogShow" max-width="750px">
        <!-- <template v-slot:activator="{ props }">
          <v-icon
            size="small"
            class="me-2"
            v-bind="props"
            @click="mostrarItem(item.raw)"
          >
            mdi-eye
          </v-icon>
        </template> -->
        <v-card max-width="400">
          <v-card-title>Configuración de Datos de Entrada</v-card-title>

          <v-col align-self="center">
            <v-card-text class="mt-0">
              <v-col>
                <v-text-field
                  v-model="muestraItem.entidad"
                  label="Entidad"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="muestraItem.conjunto_de_datos"
                  label="Conjunto de datos"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="muestraItem.tipo"
                  label="Tipo"
                  readonly
                ></v-text-field>
              </v-col>
              <v-divider></v-divider>
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
    dialogShow: false,
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
    editedIndex: -1,
    editedItem: {
      entidad: "",
      conjunto_de_datos: "",
      tipo: "",
    },
    defaultItem: {
      entidad: "",
      conjunto_de_datos: "",
      tipo: "",
    },
    muestraItem: {
      entidad: "",
      conjunto_de_datos: "",
      tipo: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1
        ? "Crear Datos de Entrada"
        : "Editar Datos de Entrada";
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
        },
        {
          entidad: "Entidad 1",
          conjunto_de_datos: "Población de adolescentes",
          tipo: "Archivo",
        },
        {
          entidad: "Entidad 2",
          conjunto_de_datos: "Trata y tráfico",
          tipo: "Archivo",
        },
      ];
    },

    mostrarItem(item) {
      this.editedIndex = this.datos.indexOf(item);
      this.muestraItem = Object.assign({}, item);
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
