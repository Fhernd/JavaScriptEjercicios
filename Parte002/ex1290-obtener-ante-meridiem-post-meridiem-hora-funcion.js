// Ejercicio 1290: Obtener el ante meridiem (AM) y post meridiem (PM) de una hora dada.

function obtenerAmPm(fecha) {
    return fecha.getHours() < 12 ? 'AM' : 'PM';
}

console.log(obtenerAmPm(new Date(2019, 1, 13, 9, 13, 12))); // AM
console.log(obtenerAmPm(new Date(2019, 1, 13, 19, 13, 12))); // PM
    