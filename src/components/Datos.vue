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

        <v-dialog v-model="dialogConfig" max-width="750px">
          <v-card>
            <v-card-title>
              <span class="text-h5">Configurar Datos de Entrada</span>
            </v-card-title>

            <v-card-text>
              <v-form @submit.prevent="submitVariables">
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="3">
                      <v-text-field
                        label="Atributo"
                        v-model="itemVariables.atributo"
                      />
                    </v-col>
                    <v-col cols="12" sm="2">
                      <v-text-field label="Tipo" v-model="itemVariables.tipo" />
                    </v-col>
                    <v-col cols="12" sm="2">
                      <v-text-field
                        label="Ejemplo"
                        v-model="itemVariables.ejemplo"
                      />
                    </v-col>
                    <v-col cols="12" sm="3">
                      <v-text-field
                        label="Métrica o atributo"
                        v-model="itemVariables.metrica"
                      />
                    </v-col>
                    <v-col cols="12" sm="2">
                      <v-btn
                        color="primary"
                        right
                        fab
                        type="submit"
                        icon="mdi-plus"
                      ></v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
              <v-table fixed-header density="compact" height="300px">
                <thead>
                  <tr>
                    <th class="text-left">Atributo</th>
                    <th class="text-left">Tipo</th>
                    <th class="text-left">Ejemplo</th>
                    <th class="text-left">Métrica o atributo</th>
                    <th class="text-left">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <template
                    v-if="muestraItem.variables && muestraItem.variables.length"
                  >
                    <tr
                      v-for="item in muestraItem.variables"
                      :key="item.atributo"
                    >
                      <td>{{ item.atributo }}</td>
                      <td>{{ item.tipo }}</td>
                      <td>{{ item.ejemplo }}</td>
                      <td>{{ item.metrica }}</td>
                      <td>
                        <v-icon
                          size="small"
                          class="me-2"
                          @click="editItemVariable(item)"
                        >
                          mdi-pencil
                        </v-icon>
                        <v-icon
                          size="small"
                          class="me-2"
                          @click="deleteItemVariable(item)"
                        >
                          mdi-delete
                        </v-icon>
                      </td>
                    </tr>
                  </template>
                  <tr v-else>
                    <td colspan="5" align="center">
                      <em>No hay registros para mostrar.</em>
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="dialogConfig = false"
              >
                Cerrar
              </v-btn>
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

      <v-dialog v-model="dialogLoading" :scrim="false" persistent width="auto">
        <v-card color="primary">
          <v-card-text>
            Descargando archivo Excel...
            <v-progress-linear
              indeterminate
              color="white"
              class="mb-0"
            ></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>

      <v-icon size="small" class="me-2" @click="editItem(item.raw)">
        mdi-pencil
      </v-icon>
      <v-icon size="small" class="me-2" @click="deleteItem(item.raw)">
        mdi-delete
      </v-icon>
      <v-icon size="small" class="me-2" @click="configurarItem(item.raw)">
        mdi-cog
      </v-icon>
      <v-icon
        v-if="item.raw.variables.length"
        size="small"
        @click="dialogLoading = true"
      >
        mdi-download
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
    dialog: false,
    search: "",
    dialogDelete: false,
    dialogShow: false,
    dialogConfig: false,
    dialogLoading: false,
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
      variables: [],
    },
    defaultItem: {
      entidad: "",
      conjunto_de_datos: "",
      tipo: "",
      variables: [],
    },
    muestraItem: {
      entidad: "",
      conjunto_de_datos: "",
      tipo: "",
      variables: [],
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
    dialogLoading (val) {
        if (!val) return

        setTimeout(() => (this.dialogLoading = false), 3000)
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
          variables: [
            {
              atributo: "Secuestros",
              tipo: "INT",
              ejemplo: "468",
              metrica: "Métrica",
            },
            {
              atributo: "Sexo",
              tipo: "STRING",
              ejemplo: "M",
              metrica: "Atributo",
            },
          ],
        },
        {
          entidad: "Entidad 1",
          conjunto_de_datos: "Población de adolescentes",
          tipo: "Archivo",
          variables: [
            {
              atributo: "Municipio",
              tipo: "STRING",
              ejemplo: "Viacha",
              metrica: "Atributo",
            },
          ],
        },
        {
          entidad: "Entidad 2",
          conjunto_de_datos: "Trata y tráfico",
          tipo: "Archivo",
          variables: [],
        },
      ];
    },

    submitVariables() {
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

    mostrarItem(item) {
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
    },
  },
};
</script>
