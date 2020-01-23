// Ejercicio 347: Crear una expresión de función como callback de la función setInterval().

let mostrarMensaje = () => {
    console.log('Se ha ejecutado el callback.');
};

setInterval(mostrarMensaje, 3000);
