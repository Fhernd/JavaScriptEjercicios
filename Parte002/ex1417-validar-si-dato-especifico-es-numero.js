// Ejercicio 1417: Validar si un dato específico es un número por medio de una función.

function esNumero(dato) {
    return !isNaN(dato) && toString.call(dato) === '[object Number]';
}

console.log(esNumero(-5));  // true
console.log(esNumero(5));   // true
console.log(esNumero(0));   // true

console.log();

console.log(esNumero(NaN));   // false
console.log(esNumero(parseInt('xyz')));   // false
console.log(esNumero(parseFloat('xyz')));   // false
