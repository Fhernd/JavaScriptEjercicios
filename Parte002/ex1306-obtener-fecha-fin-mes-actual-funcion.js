// Ejercicio 1306: Obtener la fecha de fin de mes por medio de una función personalizada.

function obtenerFechaFinMes(fecha) {
    return new Date(fecha.getFullYear(), fecha.getMonth() + 1, 0);
}

let fecha = new Date(2021, 10, 4);
console.log(fecha);
console.log(obtenerFechaFinMes(fecha)); // 30 noviembre 20219
