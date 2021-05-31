// Ejercicio 1109: Convertir un texto en formato camel case a través de una función.

// JavaScript es tremendo
// JavaScriptEsTremendo

function camelCase(frase) {
    if (frase.constructor != String) {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    return frase.replace(/\W+(.)/g, function(coincidencia, caracter) {
        return caracter.toUpperCase();
    });
}

try {
    console.log(camelCase('JavaScript es tremendo'));   // JavaScriptEsTremendo
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(camelCase({a: 42}));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
