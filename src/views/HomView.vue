<template >
    <header>
        <h1>Mi pagina web</h1>
    </header>
    <nav>
        <div class="row">
        <aside>
            <h2>Administración</h2>
            <a href="#">Home</a>
            <br>
            <a href="#">Noticias</a>
            <br>
            <a href="#">Home</a>
            <br>
            <a href="#">Contactos</a>
            <br>
            <a href="#">Sobre mi</a> 
        </aside>
        <aside class="aside-2">
            <h2>Administración</h2>
            <a href="#">Home</a>
            <br>
            <a href="#">Noticias</a>
            <br>
            <a href="#">Home</a>
            <br>
            <a href="#">Contactos</a>
            <br>
            <a href="#">Sobre mi</a> 
        </aside>
        <section>
            <h2>Section</h2>
        </section>
    </div>
    </nav>
   
    
    <footer>
        <h2>Footer</h2>
    </footer>
</template>
<style>
header{
    padding: 50px;
    background-color: aqua;
    text-align: center;
}
nav{
    display: flex;
    flex-direction: row;
    background-color: white;
}
nav a{
    color: white;
    padding: 14px 20px;
    text-decoration: none;
}
.row{
    display:flex;
    flex-wrap: wrap;
}
aside{
    flex: 30px;
    background-color: beige;
    padding: 10px;
 

}
.aside-2{
    flex: 30px;
    background-color: beige;
    padding: 20px;

}
section{
    flex: 70%;
    background-color: khaki;
    padding: 20px;
}
footer{
    padding: 20px;
    text-align: center;
    background-color: wheat;
}
@media screen and (max-width:700px){
    nav, .row{
        flex-direction: column;
    }
    
}
</style>