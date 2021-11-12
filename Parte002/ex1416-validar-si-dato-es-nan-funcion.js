// Ejercicio 1416: Validar si un dato dado corresponde con NaN usando una función.

// Not a Number
// 1/0

function esNaN(dato) {
    return dato !== dato;
}

console.log(esNaN(NaN));    // true
console.log(esNaN(1/0));    // false
console.log(esNaN('NaN'));    // false
console.log(esNaN(' '));    // false

console.log();

console.log(parseInt('xyz'));
console.log(esNaN(parseInt('xyz')));
console.log(esNaN(parseFloat('xyz')));
