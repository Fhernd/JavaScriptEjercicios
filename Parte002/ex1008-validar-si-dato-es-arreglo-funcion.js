// Ejercicio 1008: Definir una función personalizada para validar si un valor dado es un arreglo.

function esArreglo(valor) {
    return toString.call(valor) === '[object Array]';
}

console.log(esArreglo(123));    // false
console.log(esArreglo("123"));    // false
console.log(esArreglo("123".split('')));    // true
console.log(esArreglo([]));    // true
console.log(esArreglo(Array()));    // true
console.log(esArreglo(new Array()));    // true

console.log();

console.log(Array.isArray(123));    // false
console.log(Array.isArray("123"));    // false
console.log(Array.isArray("123".split('')));    // true
console.log(Array.isArray([]));    // true
console.log(Array.isArray(Array()));    // true
console.log(Array.isArray(new Array()));    // true
