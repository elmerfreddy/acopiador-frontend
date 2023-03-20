<template>
  <v-app>
    <div class="background"></div>
    <v-main class="d-flex justify-center align-center">
      <v-col cols="4" lg="4" class="mx-auto">
        <v-card class="pa-5">
          <div class="text-center">
            <v-car>
              <h2>Recuperar contraseña</h2>
            </v-car>
          </div>
          <v-form>
            <v-card-text>
              <v-text-field
                type="username"
                label="Usuario"
                placeholder="Username"
                prepend-inner-icon="mdi-account"
              />
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn color="primary" :disabled="!form" variant="elevated">
                Enviar
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: "App",

  data: () => ({
    passwordShow: false,
  }),
};
</script>
<style></style>
