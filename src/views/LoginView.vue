<template>
    <h4>Iniciar Sesión</h4>
    <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Usuario</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Contraseña</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <button type="submit" class="btn btn-primary">Ingresar</button>
        <a href="#">Olvidó su Contraseña?</a>
    </form>
</template>
<script>
export default {
    data() {
        return {
            form: {
                usuario: "",
                contraseña: "",
            }
        }
    },
    methods: {
        submit() {
            this.$store.commit('login', this.form.usuario)
        }

    }
}
</script>
<style>
form {
    margin: 3rem auto;
    width: 20%;
    min-width: 35%;
    max-width: 100%;
    background: wheat;
    border-radius: 5px;
    padding: 40px;
}

.fron-label {
    padding: 2%;
}

.fron-label-1 {
    padding: 2%;
    padding-left: 9%;
}
</style>