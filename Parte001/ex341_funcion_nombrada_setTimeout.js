// Ejercicio 341: Crear una función nombrada como callback de la función setTimeout().

function mostrarMensaje(){
    console.log('Se ha ejecutado el callback de forma satisfactoria.');
}

setTimeout(mostrarMensaje, 5000);
