// Ejercicio 1415: Validar si un dato es de tipo error con una función personalizada.

function esError(dato) {
    return dato instanceof Error || toString.call(dato) === '[object Error]';
}

console.log(esError(new Error('abc'))); // true
console.log(esError(new SyntaxError('abc'))); // true
console.log(esError(new String('abc'))); // false
console.log(esError([])); // false
console.log(esError({})); // false
