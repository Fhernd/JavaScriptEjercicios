// Ejercicio 1426: Validar si un valor es de tipo WeakSet por medio de una función personalizada.

function esWeakSet(valor) {
    return toString.call(valor) === '[object WeakSet]';
}

console.log(esWeakSet(new WeakSet()));  // true

console.log();

console.log(esWeakSet(123));    // false
console.log(esWeakSet('abc'));  // false
console.log(esWeakSet({}));  // false
console.log(esWeakSet([]));  // false
