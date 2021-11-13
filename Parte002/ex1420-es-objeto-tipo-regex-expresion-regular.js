// Ejercicio 1420: Validar si un valor dado es de tipo expresión regular (RegExp).

function esRegExp(valor) {
    return toString.call(valor) === '[object RegExp]';
}

console.log(esRegExp(new RegExp()));
console.log(esRegExp(/[0-9]+/));    // true
console.log(esRegExp(72));    // false
console.log(esRegExp('abc'));    // false
