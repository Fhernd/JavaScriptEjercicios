// Ejercicio 1363: Validar si un texto es un código postal británico válido con una expresión regular.

function esCodigoPostalBritanicoValido(texto) {
    let patron = /^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/;

    return patron.test(texto);
}

console.log(esCodigoPostalBritanicoValido('C273JH'));   // true
console.log(esCodigoPostalBritanicoValido('123456'));   // false
