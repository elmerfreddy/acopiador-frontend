<template>
    <div>

    </div>
    <form  @submit.prevent="Submit">
    <label for="" class="usu">Usuario</label>
    <input  class="nom" type="text" v-model="form.usuario" required>
    <br><br>
     <label class=cont for="">Contraseña</label>
    <input  class="contr" type="text" v-model="form.contraseña" required>
    <br><br>
    <button type="submit">Ingresar</button>
    <br>
    </form>
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
.logn{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>