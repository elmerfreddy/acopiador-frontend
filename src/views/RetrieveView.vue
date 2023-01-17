<template>
    <h4>Restablecer Contraseña</h4>
    <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Usuario</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="defreddyelmer@gmail.com">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Contraseña nueva</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Repetir contraseña</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <button type="submit" class="btn btn-primary">Guardar</button>
    </form>
</template>
<style>
form {
    margin: 3rem auto;
    width: 20%;
    min-width: 34%;
    max-width: 100%;
    background: wheat;
    border-radius: 5px;
    padding: 40px;
}
</style>