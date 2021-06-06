// Ejercicio 1134: Definir una función para remover las etiquetas HTML y XML de un texto (String).

// <p><a>JavaScript es un <span>lenguaje</span> de programación</p>.
// JavaScript un lenguaje de programación.

function removerEtiquetasHtmlXml(texto) {
    if (texto.constructor != String) {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    let patron = /<[^>]*>/g;

    return texto.replace(patron, '');
}

try {
    console.log(removerEtiquetasHtmlXml('<p><a>JavaScript es un <span>lenguaje</span> de programación</p>.'));
    // JavaScript un lenguaje de programación.
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(removerEtiquetasHtmlXml({a: 42})); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
