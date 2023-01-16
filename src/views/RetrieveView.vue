<template>
    <div class="retrieve">
        <h4>Restablecer Contraseña</h4>
        <form  class="form" >
            <span class="fa-nombre" >Usuario:</span>
            <br><br>
            <label class="fron-label" for="text" >Contraseña Nueva</label>
            <input  class="forn-input" type="text">
            <br><br>
            <label class="fron-label" for="text">Repetir Contraseña</label>
            <input  class="forn-input" type="text">
            <br><br>
            <button type="submit">Ingresar</button>
            <br>
        </form>
    </div>
</template>
<style>
form{
    margin: 3rem auto;
    width: 20%;
    min-width: 34%;
    max-width: 100%;
    background: wheat;
    border-radius: 5px;
    padding: 40px;
}
.fa-nombre{
    padding-right: 44%;
}
.fron-label{
    padding-right: 2%;
}

</style>