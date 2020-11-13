// Ejercicio 911: Definir una función para crear un arreglo de las palabras de una frase.

function obtenerPalabras(frase) {
    if (typeof frase != 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres');
    }

    return frase.split(/[^a-zA-Z-]+/);
}

try {
    console.log(obtenerPalabras('Esta es una frase')); // ['Esta', 'es', 'una', 'frase']
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerPalabras(100)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
