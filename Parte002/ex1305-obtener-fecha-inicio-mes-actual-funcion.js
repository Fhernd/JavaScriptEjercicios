// Ejercicio 1305: Obtener la fecha de inicio de mes por medio de una función personalizada.

function obtenerFechaInicioMes(fecha) {
    return new Date(fecha.getFullYear(), fecha.getMonth(), 1);
}

console.log(obtenerFechaInicioMes(new Date())); // 1 noviembre 2021

console.log();

let fecha = new Date(2019, 9, 13);
console.log(obtenerFechaInicioMes(fecha));  // 1 de octubre 2019
