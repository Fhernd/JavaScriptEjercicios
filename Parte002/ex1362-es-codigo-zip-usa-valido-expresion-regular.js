// Ejercicio 1362: Con una expresión regular validar si un texto es un código ZIP válido.

function esCodigoZipValido(texto) {
    let patron = /^[0-9]{5}(?:-[0-9]{4})?$/;

    return patron.test(texto);
}

console.log(esCodigoZipValido('05932-1234'));   // true
console.log(esCodigoZipValido('11111-9513'));   // true

console.log();

console.log(esCodigoZipValido('123456-951'));   // false
