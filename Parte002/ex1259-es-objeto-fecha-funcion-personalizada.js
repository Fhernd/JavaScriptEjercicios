// Ejercicio 1259: Crear una función que valide si un dato es de tipo fecha (Date).

function esFecha(dato) {
    return Object.prototype.toString.call(dato) === '[object Date]';
}

console.log(esFecha('October 21, 2021 10:08:32'));  // false
console.log(esFecha(new Date()));  // true
console.log(esFecha(new Date(86400000)));  // true
console.log(esFecha(new Date(2021, 10, 21)));  // true
