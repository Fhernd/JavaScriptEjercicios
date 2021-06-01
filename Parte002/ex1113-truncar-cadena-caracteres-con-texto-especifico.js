// Ejercicio 1113: Truncar una cadena de caracteres hasta cierta longitud específica en una función.

// JavaScript es tremendo.
// JavaScript es...

function truncarTexto(texto, n, fin='...') {
    if (typeof texto != 'string') {
        throw TypeError('El primer argumento debe ser una cadena de caracteres (string).');
    }

    if (n < texto.length)
        return texto.substring(0, n) + fin;
    else
        return texto;
}

try {
    console.log(truncarTexto('JavaScript es tremendo', 13));    // JavaScript es...
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(truncarTexto('JavaScript es tremendo.', 50));    // JavaScript es tremendo.
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(truncarTexto({a: 100}, 50));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
