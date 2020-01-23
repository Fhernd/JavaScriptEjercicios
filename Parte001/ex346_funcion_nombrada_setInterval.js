// Ejercicio 346: Crear una función nombrada como callback de la función setInterval().

function mostrarMensaje(){
    console.log('Se ha ejecutado el callback.');
}

setInterval(mostrarMensaje, 3000);
