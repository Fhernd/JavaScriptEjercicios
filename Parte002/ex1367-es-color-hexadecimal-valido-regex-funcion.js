// Ejercicio 1367: Usar una expresión regular para validar si un texto es un color hexadecimal válido.

function esColorHexValido(texto) {
    let patron = /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

    return patron.test(texto);
}

console.log(esColorHexValido('#FFF'));  // true
console.log(esColorHexValido('#AAA'));  // true
console.log(esColorHexValido('#BCD'));  // true
console.log(esColorHexValido('#1FA2B3'));  // true
console.log(esColorHexValido('1FA2B3'));  // false

console.log();

console.log(esColorHexValido('#1FA2K3'));  // false
console.log(esColorHexValido('#1231233'));  // false
