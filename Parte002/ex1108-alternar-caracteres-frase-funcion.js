// Ejercicio 1108: Definir una función para alternar entre minúsculas y mayúsculas en un texto.

// JavaScript
// jAVAsSCRIPT

function alternarCaracteres(frase) {
    if (frase.constructor != String) {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    return frase.replace(/([a-z]+)|([A-Z]+)/g, function(c, coincide) {
        return coincide ? c.toUpperCase() : c.toLowerCase();
    })
}

try {
    console.log(alternarCaracteres('JavaScript'));  // jAVAsSCRIPT
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(alternarCaracteres(42));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
