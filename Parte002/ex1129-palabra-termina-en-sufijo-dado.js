// Ejercicio 1129: Determinar con una función si una frase termina en un sufijo determinado.

// Las aplicaciones Web del lado del cliente se crean con JavaScript
// JavaScript

function esSufijoDeFrase(frase, sufijo) {
    if (frase.constructor != String || sufijo.constructor != String) {
        return null;
    }

    return frase.indexOf(sufijo, frase.length - sufijo.length) != -1;
}

console.log(esSufijoDeFrase('Las aplicaciones Web del lado del cliente se crean con JavaScript', 'JavaScript'));
// true

console.log();

console.log(esSufijoDeFrase('Las aplicaciones Web del lado del cliente se crean con JavaScript', 'javascript'));
// false

console.log();

console.log(esSufijoDeFrase('Las aplicaciones Web del lado del cliente se crean con JavaScript.', 'JavaScript'));
// false

console.log();

console.log(esSufijoDeFrase('Las aplicaciones Web del lado del cliente se crean con JavaScript.', 'JavaScript.'));
// true
