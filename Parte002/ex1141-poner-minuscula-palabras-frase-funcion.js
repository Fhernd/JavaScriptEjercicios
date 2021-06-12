// Ejercicio 1141<: Poner en minúscula cada palabra de una frase utilizando una expresión regular.

// ¡JavaScript es tremendo!
// ¡javascript es tremendo!

function ponerTextoMinuscula(frase) {
    if (frase.constructor != String) {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    return frase.replace(/\w\S*/g, p => p.toLowerCase());
}

try {
    console.log(ponerTextoMinuscula('¡JavaScript es tremendo!'));
    // ¡javascript es tremendo!
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(ponerTextoMinuscula(42));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

