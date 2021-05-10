// Ejercicio 1076: Obtener los últimos dos dígitos del año de un objeto fecha (Date).

function obtenerUltimosDosDigitos(fecha) {
    if (!(fecha instanceof Date)) {
        throw TypeError('El argumento debe ser un objeto fecha (Date).');
    }

    return `${String(fecha.getFullYear()).substr(2)}`;
}

try {
    console.log(obtenerUltimosDosDigitos(new Date()));  // 21
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerUltimosDosDigitos(new Date(1993, 5, 13)));  // 93
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerUltimosDosDigitos(new Date(2007, 5, 13)));  // 07
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerUltimosDosDigitos(42));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
