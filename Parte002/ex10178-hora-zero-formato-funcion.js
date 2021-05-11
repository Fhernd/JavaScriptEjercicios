// Ejercicio 1078: Obtener la hora con dos dígitos de un objeto fecha desde una función.

function obtenerHora(fecha) {
    if (!(fecha instanceof Date)) {
        throw TypeError('El argumento debe ser un objeto de tipo fecha (Date)');
    }

    return ((fecha.getHours() % 12 || 12) < 10 ? '0' : '') + (fecha.getHours() % 12 || 12);
}

try {
    console.log(obtenerHora(new Date()));   // 10
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerHora(new Date(2019, 3, 13)));   // 12
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerHora(new Date(2019, 3, 13, 7, 10, 13)));   // 07
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerHora(42));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
