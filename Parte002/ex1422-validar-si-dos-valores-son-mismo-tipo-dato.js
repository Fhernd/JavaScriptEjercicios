// Ejercicio 1422: Validar por medio de una función si dos valores dados son del mismo tipo de dato.

function mismoTipoDato(valor1, valor2) {
    return toString.call(valor1) === toString.call(valor2);
}

console.log(mismoTipoDato('1', '2'));   // true
console.log(mismoTipoDato(1, 2));   // true
console.log(mismoTipoDato(false, true));   // true
console.log(mismoTipoDato({a: 123}, {b: 987}));   // true
console.log(mismoTipoDato(/[a-z]+/, /[0-9]/));   // true

console.log();

console.log(mismoTipoDato('1', 2)); // false
console.log(mismoTipoDato(1, '2')); // false
console.log(mismoTipoDato(false, 'false')); // false
