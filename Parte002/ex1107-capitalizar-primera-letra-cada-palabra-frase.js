// Ejercicio 1107: Capitalizar la primera letra de cada palabra de una frase en una función.

// Colombia es un país de Suramérica

// Colombia Es Un País De Suramérica

function capitalizarPrimeraLetraPalabras(frase) {
    if (typeof frase != 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    return frase.replace(/\w\S*/g, function(palabra) {
        return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
}

try {
    console.log(capitalizarPrimeraLetraPalabras('Colombia es un país de Suramérica'));
    // Colombia Es Un País De Suramérica
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(capitalizarPrimeraLetraPalabras(42));   // Error
    // Colombia Es Un País De Suramérica
} catch (e) {
    console.log(`Error: ${e.message}`);
}
