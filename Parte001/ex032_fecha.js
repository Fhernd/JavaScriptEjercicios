// Ejercicio 32: Crear una fecha por medio del objeto Date.

let hoy = new Date();

console.log(hoy);

let fecha = new Date('May 13, 2013 03:17:19');
console.log(fecha);

fecha = new Date(2013, 4, 13);
console.log(fecha);

fecha = new Date(2013, 4, 13, 3, 17, 19);
console.log(fecha);

console.log(fecha.getMonth());
console.log(fecha.getFullYear());
console.log(fecha.getDate());
console.log(fecha.getMilliseconds());
