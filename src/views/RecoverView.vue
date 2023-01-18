<template>
     
     <v-app>
        <v-form ref="form">
            <h4>Recuperar Contraseña</h4>
            <br>
            <div class="login">
                <v-text-field label="Usuario" :counter="10" :rules="nameContraseña" required  prepend-icon=" mdi-account"></v-text-field>
            </div>
                <v-btn depressed color="red" class="botton" >Ingresar</v-btn>
        </v-form>       
    </v-app>
</template>
<script>
    export default{
        data(){
            return{
                valida:true,
                contraseña:'',
                repiteContraseña:'',
                show:false,
                nameContraseña:[
                    v => !!v || 'Nombre de Usuario Requerido'
                ],
                RepiteContraseña:[
                    v => !!v || 'Repetite la contraseña'
                ]
            }
        }
    }
</script>
<style>
form {
    margin: 11rem auto;
    width: 30%;
    min-width: 35%;
    max-width: 100%;
    background: rgba(245, 235, 220);
    border-radius: 20px;
    padding: 50px;
   
}
h4{
    text-align: center;
    color: #502314;

}
.botton{
    top:5% ;
    left: 35%;
    right: 5%;
    bottom: 60%;
    padding-right:5%;
    color:white;
  
}
.login{
    color: rgba(80, 35, 20, 0.6);
}

</style>