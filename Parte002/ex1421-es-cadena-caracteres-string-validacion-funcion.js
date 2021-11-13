// Ejercicio 1421: Validar si un valor dado es de tipo cadena de caracteres (String).

function esCadenaCaracteres(valor) {
    return toString.call(valor) === '[object String]';
}

console.log(esCadenaCaracteres('abc')); // true
console.log(esCadenaCaracteres(''));    // true
console.log(esCadenaCaracteres(""));    // true
console.log(esCadenaCaracteres(``));    // true
console.log(esCadenaCaracteres(`                             `));   // true

console.log();

console.log(esCadenaCaracteres(123));   // false
console.log(esCadenaCaracteres(19.17)); // false
console.log(esCadenaCaracteres({}));    // false
console.log(esCadenaCaracteres(new Map())); // false
console.log(esCadenaCaracteres(new Set())); // false
