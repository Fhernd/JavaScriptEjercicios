// Ejercicio 1050: Definir una función para validar si un dato es una fecha.

function esFecha(dato) {
    return Object.prototype.toString.call(dato) === '[object Date]';
}

console.log(esFecha(new Date()));   // true
console.log(esFecha(Date()));   // false

console.log();

console.log(new Date());
console.log(Date());
console.log(typeof Date());

console.log();

console.log(esFecha(new Date(123456789)));
console.log(esFecha(new Date(2021, 04, 25, 7, 57, 13)));
console.log(esFecha('2021-04-25T12:56:18.664Z'));   // false
