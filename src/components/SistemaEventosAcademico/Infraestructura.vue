<template>
  <section>
  <v-data-table
    :headers="headers"
    :items="entidades"
    class="elevation-1"
    :search="search"
  >
    <template v-slot:top>
      <v-toolbar>
        <v-toolbar-title><h2>Infraestructura</h2></v-toolbar-title>
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
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="editedItem.name"
                      label="Nombre"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="editedItem.direccion"
                      label="Dirección"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="editedItem.tipo"
                      label="Tipo"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="editedItem.capacidad"
                      label="Capacidad"
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
              >¿Está seguro de eliminar la infreestructura?</v-card-title>
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
</section>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    search: "",
    dialogDelete: false,

    headers: [
      {
        align: "start",
        key: "name",
        sortable: false,
        title: "Nombre",
      },
      {
        align: "start",
        key: "direccion",
        sortable: false,
        title: "Dirección",
      },
      { title: "Tipo", key: "tipo" },
      { title: "Capacidad", key: "capacidad" },
      { title: "Acciones", key: "actions", sortable: false },
    ],
    entidades: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      direccion: "",
      tipo: "",
      capacidad: "",
    },
    defaultItem: {
      name: "",
      direccion: "",
      tipo: "",
      capacidad: "",
    },
    entidadItem: {
      name: "",
      direccion: "",
      tipo: "",
      capacidad: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo Infreestructura" : "Editar Infreestructura";
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
          name: 'Curso Hemorragias STB',
          direccion: 'Zona Avaroa',
          tipo: 'Edificio',
          capacidad: 100,
        },
        {
          name: 'Jornada de Capacitación ',
          direccion: 'Av. montes',
          tipo: 'Coliseo',
          capacidad: 100,
        },
        {
          name: 'Congreso universitario de ciencias',
          direccion: 'av. Civica',
          tipo: 'Complejo deportivo',
          capacidad: 50,
        },
        {
          name: 'Resurgimiento de nuevos lideres ',
          direccion: 'Esquina Zagarnaga',
          tipo: 'Pabellon E',
          capacidad: 200,
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
