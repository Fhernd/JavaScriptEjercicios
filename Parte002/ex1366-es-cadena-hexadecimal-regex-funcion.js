// Ejercicio 1366: Comprobar si un texto representa un número hexadecimal con una expresión regular.

function esHexadecimal(texto) {
    let patron = /^[0-9a-fA-F]+$/;

    return patron.test(texto);
}

console.log(esHexadecimal('1A'));   // true
console.log(esHexadecimal('AF'));   // true
console.log(esHexadecimal('BC'));   // true
console.log(esHexadecimal('11FF23'));   // true

console.log();

console.log(esHexadecimal('BCG'));   // false
console.log(esHexadecimal('FFI'));   // false
