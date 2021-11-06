// Ejercicio 1360: Con una expresión regular comprobar si un texto es alfanumérico.

function esAlfanumerico(texto) {
    let patron = /^[A-Za-z0-9]+$/;

    return patron.test(texto);
}

console.log(esAlfanumerico('123ABC'));  // true
console.log(esAlfanumerico('123xyz'));  // true
console.log(esAlfanumerico('xyz123'));  // true
console.log(esAlfanumerico('xyz123abc'));  // true

console.log();

console.log(esAlfanumerico('123.abc')); // false
console.log(esAlfanumerico('123')); // ?
console.log(esAlfanumerico('abc')); // ?
console.log(esAlfanumerico('#@*')); // false
