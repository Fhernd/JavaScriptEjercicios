// Ejercicio 1140: Poner en mayúscula cada palabra de una frase utilizando una expresión regular.

// ¡JavaScript es tremendo!
// ¡JAVASCRIPT ES TREMENDO!

function ponerTextoMayuscula(frase) {
    if (frase.constructor != String) {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    return frase.replace(/\w\S*/g, p => p.toUpperCase());
}

try {
    console.log(ponerTextoMayuscula('¡JavaScript es tremendo!'));
    // ¡JAVASCRIPT ES TREMENDO!
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(ponerTextoMayuscula(42));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
