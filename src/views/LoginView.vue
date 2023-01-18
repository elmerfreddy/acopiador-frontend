<template>
    
    <v-app>
        <v-form class="form">
            <h4>Iniciar Sesión</h4>
            <br>
            <div class="login">
                <v-text-field label="Usuario" :counter="10" :rules="nameContraseña" required  prepend-icon=" mdi-account"></v-text-field>
            </div>
        
            <div class="login">
                <v-text-field label="Contraseña"  :rules="RepiteContraseña" :type="show?'text':'password'" required hint="Contraseña requerido" prepend-icon=" mdi-lock"  ></v-text-field>
            </div>
                <v-btn  class="botton" >Ingresar</v-btn>
            <br> <br>
             <a href="#">Olvidó su Contraseña?</a>
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
    margin: 8rem auto;
    width: 20%;
    min-width: 35%;
    max-width: 100%;
    background: rgba(245, 235, 220);
    border-radius: 20px;
    padding: 10px; 
}
a{  
    text-align: center;
    color: #D62300;
}
h4{
    text-align: center;
    color: #502314;

}
.fron-label {
    padding: 7%;
}

.fron-label-1 {
    padding: 2%;
    padding-left: 9%;
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
.login{
    color: rgba(80, 35, 20, 0.6);
}

</style>