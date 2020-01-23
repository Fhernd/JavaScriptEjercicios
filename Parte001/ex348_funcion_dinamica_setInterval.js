// Ejercicio 348: Crear una función dinámica como callback de la función setInterval().

let mostrarMensaje = new Function("console.log('Se ha ejecutado el callback.');");

setInterval(mostrarMensaje, 3000);
