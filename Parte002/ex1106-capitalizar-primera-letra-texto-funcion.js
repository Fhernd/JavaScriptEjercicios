// Ejercicio 1106: Usar una función personalizada para capitalizar la primera letra de un texto.

// javascript es tremendo

// Javascript es tremendo

function capitalizarPrimeraLetra(frase) {
    if (typeof frase != 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    return frase.charAt(0).toUpperCase() + frase.slice(1);
}

try {
    console.log(capitalizarPrimeraLetra('javascript es tremendo')); // Javascript es tremendo
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(capitalizarPrimeraLetra('¡javascript es tremendo!')); // ¡javascript es tremendo!
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(capitalizarPrimeraLetra(42)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
