// Ejercicio 1139: Remover la capitalización de cada palabra de una frase con una expresión regular.

// JavaScript Es Un Lenguaje De Programación
// javaScript es un lenguaje de programación

function removerCapitalizacionPalabras(frase) {
    if (frase.constructor != String) {
        throw TypeError('El argumento debe ser una cadena de caracteres (String).');
    }

    return frase.replace(/\w\S*/g, (palabra) => palabra.charAt(0).toLowerCase() + palabra.slice(1));
}

try {
    console.log(removerCapitalizacionPalabras('JavaScript Es Un Lenguaje De Programación'));
    // javaScript es un lenguaje de programación
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(removerCapitalizacionPalabras(42)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
