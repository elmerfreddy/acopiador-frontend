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
          <v-toolbar-title><h2>Comentario</h2></v-toolbar-title>
        </v-toolbar>
        <v-toolbar flat>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >¿Está seguro de eliminar la Comentario?</v-card-title >
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
        <v-icon size="small" @click="deleteItem(item.raw)"> mdi-delete </v-icon>
      </template>

      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reestablecer </v-btn>
      </template>
    </v-data-table>
  </section>
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
        key: "name",
        sortable: false,
        title: "Usuario",
      },
      { title: "Comentario", key: "comentario" },
      { title: "Fecha", key: "fecha" },
      { title: "Evento", key: "evento" },
      { title: "Acciones", key: "actions", sortable: false },
    ],
    entidades: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      comentario: "",
      fecha: "",
      evento: "", 
    },
    defaultItem: {
      name: "",
      comentario: "",
      fecha: "",
      evento: "", 
    },
    entidadItem: {
      name: "",
      comentario: "",
      fecha: "",
      evento: "", 
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1
        ? "Nuevo Infreestructura"
        : "Editar Infreestructura";
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
          name: "Ivan",
          comentario: "Fue un exlente evento academico",
          fecha: "01/02/2020",
          evento: "Curso Hemorragias STB",
        },
        {
          name: "Elizabeht",
          comentario: "Exlente evento academico",
          fecha: "05/02/2021",
          evento: "Jornada de Capacitación ",
        },
        {
          name: "Ariel",
          comentario: "Exlente evento academico",
          fecha: "02/02/2015",
          evento: "Congreso universitario de ciencias",
        },
        {
          name: "Daynor",
          comentario: "Exlente evento academico",
          fecha: "02/02/2023",
          evento: " Resurgimiento de nuevos lideres ",
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
