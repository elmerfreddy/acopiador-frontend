<template>
  <v-app>
    <v-main class="d-flex justify-center align-center">
      <v-col cols="4" lg="4" class="mx-auto">
        <v-card class="pa-5">
          <div class="text-center">
            <h2>Iniciar Sesión</h2>
          </div>
          <v-form>
            <v-card-text>
              <v-text-field
                type="text"
                label="Usuario"
                placeholder="Nombre de usuario"
                prepend-inner-icon="mdi-account"
                v-model="form.usuario"
                required
              />
              <v-text-field
                :type="passwordShow ? 'text' : 'password'"
                label="Contraseña"
                placeholder="Contraseña"
                prepend-inner-icon="mdi-key"
                :append-inner-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="passwordShow = !passwordShow"
                v-model="form.password"
                required
              />
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn
                color="primary"
                :disabled="!form"
                variant="elevated"
                block
                type="submit"
                @click="Submit"
              >
                Ingresar
              </v-btn>
            </v-card-actions>
            <router-link to="/recover">Olvidó su contraseña?</router-link>
          </v-form>
        </v-card>
        <v-img
          lazy-src="@/assets/img/logomaker.jpg"
          max-height="63"
          max-width="500"
          src="@/assets/img/logomaker.jpg"
          class="mt-8"
        >
        </v-img>
      </v-col>
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: "LoginView",

  data: () => ({
    passwordShow: false,
    form: {
      usuario: "",
      password: "",
    },
  }),
  methods: {
    Submit() {
      this.$store.commit("login", this.form.usuario);
      this.$router.replace({ name: "dashboard" });
      return false;
    },
  },
};
</script>
<style></style>
