// Ejercicio 1095: Obtener la fecha del día de final de mes a través de una función.

function obtenerFechaFinMes(fecha) {
    if (!(fecha instanceof Date)) {
        throw TypeError('El argumento debe ser un objeto de tipo fecha (Date).');
    }

    return new Date(fecha.getFullYear(), fecha.getMonth() + 1, 0);
}

console.log(new Date());

console.log();

try {
    console.log(obtenerFechaFinMes(new Date()));    // ~ 31
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerFechaFinMes(new Date(2021, 1, 17)));    // ~ 28
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerFechaFinMes(new Date(2020, 1, 17)));    // ~ 29
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerFechaFinMes(42));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
