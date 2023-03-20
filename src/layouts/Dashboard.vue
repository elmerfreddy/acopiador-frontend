<template>
  <v-container
    fluid
    class="primary fill-height"
    :style="{
      'background-image': 'url(' + require('../assets/img/fondo.jpg') + ')',
      'height': '100%',
      'background-position': 'center',
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
    }"
  >
    <v-row>
      <v-col>
        <v-container>
          <v-row>
            <v-col
              align-self="start"
              cols="12"
              sm="12"
              class="text-center text-h3 pa-12"
            >
              Sistema De Eventos Academicos
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
                  <v-btn variant="text" block :to="{ name: 'graficos' }"
                    >Enviar Evento</v-btn
                  >
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
                  <v-btn variant="text" block>Ver Graficos</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="text-center">
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>
