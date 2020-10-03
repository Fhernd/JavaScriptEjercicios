// Ejercicio 871: Cambiar el color del texto de la salida del método console.log().

function mostrarMensajeConsola(mensaje, color='white') {
    if (typeof color != 'string') {
        throw TypeError('El argumento `color` debe ser una cadena de caracteres.');
    }

    console.log(`%c${mensaje}`, `color:${color}`);
}

try {
    mostrarMensajeConsola('Color por defecto del mensaje en la consola.');
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    mostrarMensajeConsola('Color rojo del mensaje en la consola.', 'red');
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    mostrarMensajeConsola('Color amarillo del mensaje en la consola.', 'yellow');
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    mostrarMensajeConsola('Color azul del mensaje en la consola.', 'blue');
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    mostrarMensajeConsola('Color azul del mensaje en la consola.', 100);
} catch (e) {
    console.log(`Error: ${e.message}`);
}
