// Ejercicio 1124: Usar una función para remover una sección de una cadena de caracteres.

// JavaScript es un lenguaje de programación para la Web.
// JavaScript es un lenguaje de para la Web.

function removerSeccionTexto(frase, texto) {
    if (frase.constructor != String || texto.constructor != String) {
        return null;
    }

    let indice = frase.indexOf(texto);

    if (indice == -1) {
        return frase;
    }

    return frase.slice(0, indice) + frase.slice(indice + texto.length);
}

console.log(removerSeccionTexto('JavaScript es un lenguaje de programación para la Web.', 'programación'));
console.log(removerSeccionTexto(42, 'programación'));   // null
