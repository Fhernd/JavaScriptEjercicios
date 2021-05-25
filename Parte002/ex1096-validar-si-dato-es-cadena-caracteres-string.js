// Ejercicio 1096: Validar a través de una función si un valor dado es de tipo cadena de caracteres (string).

function esCadenaCaracteres(dato) {
    return Object.prototype.toString.call(dato) === '[object String]';
}

console.log(esCadenaCaracteres(true));  // false
console.log(esCadenaCaracteres(false));  // false
console.log(esCadenaCaracteres(42));  // false
console.log(esCadenaCaracteres({a: 42}));  // false
console.log(esCadenaCaracteres(new Set()));  // false
console.log(esCadenaCaracteres(new Map()));  // false
console.log(esCadenaCaracteres([]));  // false
console.log(esCadenaCaracteres(new Array()));  // false

console.log();

console.log(esCadenaCaracteres(''));    // true
console.log(esCadenaCaracteres(""));    // true
console.log(esCadenaCaracteres(``));    // true
console.log(esCadenaCaracteres(new String()));  // true
console.log(esCadenaCaracteres('John Ortiz Ordoñez'));  // true
console.log(esCadenaCaracteres('                            '));  // true
