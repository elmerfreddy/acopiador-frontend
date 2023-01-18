<template>
    <v-app>
        
    <v-form ref="form"
      v-model="valida" 
      lazy-validation>
            <h4>Restablecer Contraseña</h4>
            <br>
            <label for="exampleInputEmail1" class="form-label">Usuario:</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="defreddyelmer@gmail.com">
                <br> <br>
            <div class="login">
                <v-text-field v-model="contraseña" label="Contraseña Nueva" :counter="10" :rules="nameContraseña" required  prepend-icon=" mdi-pencil"></v-text-field>
            </div>
        
            <div class="login">
                <v-text-field v-model="repiteContraseña" label="Repetir Contraseña"  :rules="RepiteContraseña" :type="show?'text':'password'" required hint="Campo obligatorio" prepend-icon=" mdi-lock"  ></v-text-field>
            </div>
                <v-btn  class="botton" >Ingresar</v-btn>
            <br> <br>
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
                    v => !!v || 'Contraseña nueva Requerido'
                ],
                RepiteContraseña:[
                    v => !!v || 'Vuelva a colocar la contraseña'
                ]
            }
        }
    }
</script>
<style>
form {
    margin: 8rem auto;
    width: 30%;
    min-width: 35%;
    max-width: 100%;
    background: rgba(245, 235, 220);
    border-radius: 20px;
    padding: 30px;
   
   
}
.form-label{
    color:rgba(80, 35, 20, 0.8);
    padding:10%
}
a{  
    color: #D62300;
}
h4{
    text-align: center;
    color: #502314;

}


.botton{
    top:5% ;
    left: 35%;
    bottom: 60%;
    padding-right:5%;
    color:white;
    background-color:#f72700;
}
.login{
    color: rgba(80, 35, 20, 0.6);
}

</style>