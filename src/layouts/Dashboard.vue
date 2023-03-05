<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" class="text-center text-h3 pa-12">
        Bienvenido al Sistema Estadístico
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" align-self="center" class="text-center">
        <v-card class="mx-auto" max-width="344">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
            cover
          ></v-img>
          <v-card-actions>
            <v-btn variant="text" block :to="{name: 'enviar_datos'}">Enviar Datos</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" align-self="center" class="text-center">
        <v-card class="mx-auto" max-width="344">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
            cover
          ></v-img>
          <v-card-actions class="text-center">
            <v-btn variant="text" block>Ver Reportes</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <div>Derechos Reservados - Empresa - 2023</div>
        <div><a href="">www.empresa.com</a></div>
      </v-col>
    </v-row>
  </v-container>
</template>
