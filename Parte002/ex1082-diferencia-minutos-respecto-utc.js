// Ejercicio 1082: Obtener diferencia en minutos de la zona horaria actual respecto a UTC.

let fechaActual = new Date();   // GMT-05

console.log(fechaActual);

console.log();

console.log(fechaActual.getTimezoneOffset());   // 300
