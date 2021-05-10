// Ejercicio 1075: Obtener el año de un objeto fecha (Date) con la función getFullYear().

let fechaActual = new Date();
console.log(fechaActual.getFullYear()); // 2021

console.log();

let fecha = new Date(1983, 4, 11);
console.log(fecha.getFullYear());   // 1983

console.log();

let otraFecha = new Date(fecha.valueOf());
console.log(otraFecha.getFullYear());   // 1983
