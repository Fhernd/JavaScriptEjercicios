// Ejercicio 342: Crear una expresión de función como callback de la función setTimeout().

let mostrarMensaje = function() {
    console.log('Se ha ejecutado el callback de forma satisfactoria.');
};

setTimeout(mostrarMensaje, 5000);
