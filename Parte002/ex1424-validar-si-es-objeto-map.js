// Ejercicio 1424: Validar si un valor dado es de tipo Map (mapa) usando una función.

function esMap(valor) {
    return toString.call(valor) === '[object Map]';
}

console.log(esMap(new Map()));  // true
console.log(esMap('abc'));  // false
console.log(esMap(123));  // false
console.log(esMap({}));  // false
