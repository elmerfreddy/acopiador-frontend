<template>
    <div class="login" >
        <h4>Iniciar Sesión</h4>
        <form  class="form" @submit.prevent="Submit">
            <label for="" class="usu">Usuario</label>
            <input  class="nom" type="text" v-model="form.usuario" required>
            <br><br>
            <label class=cont for="">Contraseña</label>
            <input  class="contr" type="text" v-model="form.contraseña" required>
            <br><br>
            <button type="submit">Ingresar</button>
            <br>
        </form>
    </div>
</template>
<script>
export default{
    data(){
        return{
            form:{
                usuario:"",
                contraseña:"",
            }
        }
    },
    methods:{
        submit(){
            this.$store.commit('login',this.form.usuario)
        }

    }
}
</script>
<style>
form{
    margin: 3rem auto;
    justify-content: center;
    width: 20%;
    min-width: 30%;
    max-width: 100%;
    background: wheat;
    border-radius: 5px;
    padding: 40px;
}
</style>