
<template>
  <v-card width="1000">
    <v-container>
      <v-tabs v-model="tabs" bg-color="primary">

        <v-tab value="one">1. Datos generales</v-tab>
        <v-tab value="two">2. Configurar datos</v-tab>
        <v-tab value="three">3. Petición</v-tab>
        <v-tab value="four">4. Respuesta</v-tab>
        <v-tab value="five">5. Test</v-tab>

      </v-tabs>
    </v-container>
    <v-card-text>
      <v-window v-model="tabs">
        <v-window-item value="one">
          <v-sheet width="600" class="mx-auto">
            <v-form v-model="valid">
              <v-container>
                <v-row>
                  <v-col cols="3">
                    <v-list>
                      <p class="text-lg-right">Entidad:</p>
                    </v-list>
                  </v-col>
                  <v-col cols="8">
                    <v-combobox label="Seleccionar" :items="['Entidad 1', 'Entidad 2', 'Entidad 3']"></v-combobox>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col lg="3" xl="">
                    <v-list>
                      <p class="text-lg-right">Conjunto de datos:</p>
                    </v-list>
                  </v-col>
                  <v-col cols="8">
                    <v-combobox label="Seleccionar" :items="['Estadistica de Edades', 'Población de varones',
                    'Población de mujeres', 'Población de niños', 'Población de adolescentes',
                    'Generacional (género)', 'Etnia',]"></v-combobox>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="3">
                    <v-list>
                      <p class="text-lg-right">Tipo:</p>
                    </v-list>
                  </v-col>
                  <v-col cols="8">
                    <v-combobox label="Seleccionar" :items="['Web servicie', 'Formulario', 'Archivo']"></v-combobox>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" variant="text" @click="close">
                Continuar
              </v-btn>
            </v-card-actions>
          </v-sheet>
        </v-window-item>

        <v-window-item value="two">
          <v-table fixed-header center height="300px">
            <thead>
              <tr>
                <v-spacer></v-spacer>
                <th class="text-left">
                  Atributo
                </th>
                <th class="text-left">
                  Tipo
                </th>
                <th class="text-left">
                  Ejemplo
                </th>
                <th class="text-left">
                  Metrica o atributo
                </th>
              </tr>
            </thead>
            <tbody>

              <tr v-for="item in desserts" :key="item.name">
                <v-spacer></v-spacer>
                <td>{{ item.name }}</td>
                <td>{{ item.tipo }}</td>
                <td>{{ item.ejemplo }}</td>
                <td>{{ item.metrica }}</td>
              </tr>
            </tbody>
          </v-table>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" variant="text" @click="close">
             Continuar
            </v-btn>
          </v-card-actions>
        </v-window-item>

        <v-window-item value="three">
          <v-table fixed-header center height="300px">
            <thead>
              <tr>
                <v-spacer></v-spacer>
                <th class="text-left">
                  Nombre
                </th>
                <th class="text-left">
                  Tipo
                </th>
                <th class="text-left">
                  Ejemplo
                </th>
              </tr>
            </thead>
            <tbody>

              <tr v-for="item in desserts" :key="item.name">
                <v-spacer></v-spacer>
                <td>{{ item.name2 }}</td>
                <td>{{ item.tipo }}</td>
                <td>{{ item.ejemplo }}</td>
              </tr>
            </tbody>
          </v-table>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" variant="text" @click="close">
              Continuar
            </v-btn>
          </v-card-actions>
        </v-window-item>

        <v-window-item value="four">
          <v-table fixed-header center height="300px">
            <thead>
              <tr>
                <v-spacer></v-spacer>
                <th class="text-left">
                  Respuesta
                </th>
                <th class="text-left">
                  Acción
                </th>
              </tr>
            </thead>
            <tbody>

              <tr v-for="item in desserts" :key="item.name">
                <v-spacer></v-spacer>
                <td>{{ item.respuesta }}</td>
                <td>{{ item.accion }}</td>
              </tr>
            </tbody>
          </v-table>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" variant="text" @click="close">
              Continuar
            </v-btn>
          </v-card-actions>
        </v-window-item>

        <v-window-item value="five">
          <v-sheet>
            <v-form v-model="valid">
              <v-container>
                <v-row>
                  <v-col cols="3">
                    <v-list>
                      <p class="text-lg-right">Antecendetes:</p>
                    </v-list>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field label=""></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="3">
                    <v-list>
                      <p class="text-lg-right">Sexo:</p>
                    </v-list>
                  </v-col>
                  <v-col cols="6">
                    <v-combobox label="Seleccionar" :items="['Mujer', 'Hombre',
                    'otro', ,]"></v-combobox>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="3">
                    <v-list>
                      <p class="text-lg-right">Edad:</p>
                    </v-list>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field label=""></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col lg="3" xl="">
                    <v-list>
                      <p class="text-lg-right">Departamento:</p>
                    </v-list>
                  </v-col>
                  <v-col cols="6">
                    <v-combobox label="Seleccionar"
                      :items="['La paz', 'Cochabamba', 'Oruro', 'Potosi', 'Beni', 'Oruro', 'Pando', 'Chuquisaca', 'Santa Cruz',]"></v-combobox>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="3">
                    <v-list>
                      <p class="text-lg-right">Municipio:</p>
                    </v-list>
                  </v-col>
                  <v-col cols="6">
                    <v-combobox label="Seleccionar"
                      :items="['Viacha', 'Caranavi', 'Achacachi', 'La asunta', 'Sica sica', 'Pucarani',]"></v-combobox>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="3">
                    <v-list>
                      <p class="text-lg-right">Gestión:</p>
                    </v-list>
                  </v-col>
                  <v-col cols="6">
                    <v-combobox label="Seleccionar"
                      :items="['La paz', 'Cochabamba', 'Oruro', 'Potosi', 'Beni', 'Oruro', 'Pando', 'Chuquisaca', 'Santa Cruz',]"></v-combobox>
                  </v-col>
                </v-row>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" variant="text" @click="close">
                    Finalizar
                  </v-btn>
                </v-card-actions>
              </v-container>
            </v-form>
          </v-sheet>
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>

</template>
<script>
export default {

  data: () => ({
    dialog: false,
    tabs: null,
    dialogDelete: false,


    headers: [
      {
        align: 'start',
        key: 'atributo',
        sortable: false,
        title: 'Atributo',
      },
      {
        align: 'start',
        key: 'tipo',
        sortable: false,
        title: 'Tipo',
      },
      {
        align: 'start',
        key: 'ejemplo',
        sortable: false,
        title: 'Ejemplo',
      },
      { title: 'Métrica', key: 'metrica' },
      { title: 'Acciones', key: 'actions', sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      name2: '',
      tipo: '',
      ejemplo: "",
      metrica: "",
      respuesta: "",
      accion: "",
    },
    defaultItem: {
      name: '',
      name2: '',
      tipo: '',
      ejemplo: "",
      metrica: "",
      respuesta: "",
      accion: "",
    },
    entidadItem: {
      name: '',
      name2: '',
      tipo: '',
      ejemplo: "",
      metrica: "",
      respuesta: "",
      accion: "",
    },

  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Nuevo Entidad' : 'Editar Entidad'
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
          name: 'Secuestros',
          name2: 'Aprendidos',
          tipo: 'INT',
          ejemplo: '46.8',
          metrica: 'Métrica',
          respuesta: '200',
          accion: 'Ok',
        },
        {
          name: 'Sexo',
          name2: 'Sexo',
          tipo: 'Chr',
          ejemplo: 'M',
          metrica: 'Atributo',
          respuesta: '500',
          accion: 'Intentar más tarde',
        },
        {
          name: 'edad',
          name2: 'edad',
          tipo: 'INT',
          ejemplo: '31',
          metrica: 'Atributo',
          respuesta: '404',
          accion: 'Notificar',
        },
        {
          name: 'Municipio',
          name2: 'Municipio',
          tipo: 'Chr',
          ejemplo: '31',
          metrica: 'Municipio',
          respuesta: '401',
          accion: 'Verificar credenciales',
        },
        {
          name: 'Mes',
          name2: 'Mes',
          tipo: 'Chr',
          ejemplo: '31',
          metrica: 'Mes',
        },
        {
          name: 'Gestión',
          name2: 'Gestión',
          tipo: 'INT',
          ejemplo: '31',
          metrica: 'Año',
        },
      ]
    },
    mostrarItem(item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.entidadItem = Object.assign({}, item)
      this.dialog = false
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

