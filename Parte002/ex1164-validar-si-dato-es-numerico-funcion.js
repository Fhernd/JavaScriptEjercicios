// Ejercicio 1164: Definir una función para validar si un dato es numérico.

function esNumerico(dato) {
    return !isNaN(parseFloat(dato)) && isFinite(dato);
}

console.log(esNumerico(12));    // true
console.log(esNumerico(-12));   // true
console.log(esNumerico(3.1415));    // true
console.log(esNumerico(-3.1415));   // true
console.log(esNumerico('12'));  // true
console.log(esNumerico('-12')); // true

console.log();

console.log(esNumerico(''));    // false
console.log(esNumerico(' '));   // false
console.log(esNumerico('\n'));  // false
console.log(esNumerico('abc')); // false
