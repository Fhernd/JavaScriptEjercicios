// Ejercicio 1369: Escribir una expresión regular para comprobar si un texto es HTML válido.

// <a></a>

function esHtmlValido(texto) {
    let patron = /<([a-z]+) *[^/]*?>/;

    return patron.test(texto);
}

console.log(esHtmlValido('<a>OrtizOL</a>'));    // true
console.log(esHtmlValido('<em>OrtizOL</em>'));    // true

console.log();

console.log(esHtmlValido('OrtizOL'));    // false
console.log(esHtmlValido('.clase'));    // false
