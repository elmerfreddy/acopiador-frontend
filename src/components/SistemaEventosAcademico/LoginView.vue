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
                type="button"
                @click="Submit"
              >
                Ingresar
              </v-btn>
            </v-card-actions>
            <router-link to="/recover">Olvidó su contraseña?</router-link>
          </v-form>
        </v-card>
      </v-col>
    </v-main>
  </v-app>
</template>
<script>
import axios from "axios";
export default {
  name: "LoginView",

  data: () => ({
    passwordShow: false,
    form: {
      usuario: "daynor.cori@gmail.com",
      password: "123456",
    },
  }),
  methods: {
    async Submit(e) {
      /*try {
        const response = await axios.post("/api/auth/login", {
          email: this.form.usuario,
          password: this.form.password,
        });
        this.$store.commit("login", response.data.user.nombre + ' ' + response.data.user.apellido );
        this.$store.commit("setToken", response.data.token );
        this.$router.replace({ name: "dashboard" });
      } catch (error) {
        console.error(error);
      }*/
      this.$store.commit("login", "Daynor Cori");
      this.$store.commit("setToken", "abcdefghijk.12345678890.abcdefghijk");
      this.$router.replace({ name: "dashboard" });
      e.preventDefault();
    },
  },
};
</script>
<style></style>
