<template>
    <div class="login" >
        <h4>Iniciar Sesión</h4>
        <form  class="form">
            <label class="fron-label-1" for="text" >Usuario</label>
            <input  class="forn-input" type="text">
            <br><br>
            <label class="fron-label" for="text">Contraseña</label>
            <input  class="forn-input" type="text">
            <br><br>
            <button type="submit">Ingresar</button>
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
    min-width: 35%;
    max-width: 100%;
    background: wheat;
    border-radius: 5px;
    padding: 40px;
}
.fron-label{
    padding: 2%;
}
.fron-label-1{
    padding: 2%;
    padding-left: 9%;
}
</style>