// Ejercicio 1393: Utilizar una función personalizada para validar si un dato es un objeto estándar.

function esObjetoEstandar(dato) {
    return Object.prototype.toString.call(dato) === '[object Object]';
}

let persona = {
    id: 1001,
    nombre: 'Diana',
    email: 'diana@mail.co'
}

console.log(esObjetoEstandar(persona)); // true

console.log();

console.log(esObjetoEstandar({a: 1}));  // true

console.log();

console.log(esObjetoEstandar(1000));  // false
console.log(esObjetoEstandar(new Map()));  // false
console.log(esObjetoEstandar(new Array()));  // false
