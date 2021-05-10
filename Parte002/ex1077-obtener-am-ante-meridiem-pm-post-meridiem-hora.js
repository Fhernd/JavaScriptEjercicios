// Ejercicio 1077: Obtener AM (ante-meridiem) o PM (post-meridiem) según la hora dada.

function obtenerAmPm(fecha) {
    if (!(fecha instanceof Date)) {
        throw TypeError('El argumento debe ser de tipo fecha (Date).');
    }

    return fecha.getHours() < 12 ? 'AM' : 'PM';
}

try {
    console.log(obtenerAmPm(new Date()));   // PM
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerAmPm(new Date(2043, 4, 21)));   // AM
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerAmPm(42));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
