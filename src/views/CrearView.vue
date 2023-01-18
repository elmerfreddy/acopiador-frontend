<template>
   
  <v-form class="form"
    ref="form"
    v-model="valid"
    lazy-validation
  > 
    <h4>Crear Usuario</h4>
    <br>
    <v-text-field
      v-model="name"
      :counter="15"
      :rules="nameRules"
      color="red-darken-1"
      label="Name"
      required
    ></v-text-field>
    <v-text-field
      v-model="name"
      :counter="20"
      :rules="nameRules"
      color="red-darken-1"
      label="Apellidos"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      color="red-darken-1"
      label="Correo"
      required
    ></v-text-field>

    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      color="red-darken-1"
      label="Cecular"
      required
    ></v-text-field>
    <v-select
      v-model="select"
      :items="items"
      color="red-darken-1"
      :rules="[v => !!v || 'Item is required']"
      label="Entidad"
      required
    ></v-select>
    <v-text-field
      v-model="email"
      color="red-darken-1"
      :rules="emailRules"
      label="Codigo"
      required
    ></v-text-field>

    <v-btn  class="botton" >Guardar</v-btn>
     

  </v-form>

</template>
<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4'
      ],
      checkbox: false
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      }
    }
  }
</script>
<style>
form {
    margin: 2rem auto;
    width: 20%;
    min-width: 50%;
    max-width: 100%;
    background: rgba(245, 235, 220);
    border-radius: 20px;
    padding: 10px; 
    text-align: center;
    color: #502314;
}
.h4{
 background-color: #502314;

}
.botton{
    top:5% ;
    left: 35%;
    right: 5%;
    bottom: 60%;
    padding-right:5%;
    color:white;
    background-color:#f72700;
}


</style>