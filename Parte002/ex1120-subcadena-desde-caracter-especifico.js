// Ejercicio 1120: Extraer subcadena desde un texto a partir de un carácter dado.

// JavaScript es un lenguaje de programación
// c = S
// Script es un lenguaje de programación

function extraerSubcadena(texto, c) {
    let indice = texto.indexOf(c);

    return indice != -1 ? texto.substring(indice) : null;
}

console.log(extraerSubcadena('JavaScript es un lenguaje de programación', 'S'));    // Script es un lenguaje de programación

console.log(extraerSubcadena('JavaScript es un lenguaje de programación', 'l'));    // lenguaje de programación

console.log(extraerSubcadena('JavaScript es un lenguaje de programación', 'L'));    // null
