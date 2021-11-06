// Ejercicio 1365: Validar si un texto es un código de seguridad social válido con una expresión regular.

function esCodigoSeguridadSocialValido(texto) {
    let patron = /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/;

    return patron.test(texto);
}

console.log(esCodigoSeguridadSocialValido('020-91-5783'));        // true
console.log(esCodigoSeguridadSocialValido('020-AC-5783'));        // false
