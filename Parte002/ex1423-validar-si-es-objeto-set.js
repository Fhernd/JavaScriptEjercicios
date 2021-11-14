// Ejercicio 1423: Validar si un valor dado es de tipo Set (conjunto) usando una función.

function esSet(valor) {
    return toString.call(valor) === '[object Set]';
}

console.log(esSet(new Set())); // true
console.log(esSet(new Set([1, 2, 3]))); // true

console.log();

console.log(esSet([1, 2, 3]));  // false
console.log(esSet(''));  // false
console.log(esSet('abc'));  // false
console.log(esSet(23));  // false
