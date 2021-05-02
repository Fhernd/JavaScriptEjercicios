// Ejercicio 1059: Obtener la fecha del día de ayer con una función personalizada.

function esFecha(fecha) {
    return Object.prototype.toString.call(fecha) === '[object Date]';
}

function obtenerFechaAyer(fechaActual) {
    if (!esFecha(fechaActual)) {
        throw TypeError('El argumento debe ser una fecha (Date).');
    }

    return new Date((fechaActual.setDate(fechaActual.getDate() - 1)));
}

let fechaActual = new Date();
console.log(fechaActual);

console.log();

try {
    console.log(obtenerFechaAyer(new Date()));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerFechaAyer(new Date('May 1, 2021')));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerFechaAyer('May 1, 2021'));
} catch (e) {
    console.log(`Error: ${e.message}`);
}
