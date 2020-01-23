// Ejercicio 343: Crear una función dinámica como callback de la función setTimeout().

let mostrarMensaje = new Function("console.log('Se ha ejecutado el callback.');");

setTimeout(mostrarMensaje, 5000);
