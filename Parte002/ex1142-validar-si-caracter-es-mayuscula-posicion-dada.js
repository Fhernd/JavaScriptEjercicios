// Ejercicio 1142: Determinar si un carácter en una posición (índice) dada está en mayúscula o no.

// JavaScript
// indice = 4
// c = S
// => true

// indice = 3
// c = a
// => false

function estaEnMayuscula(frase, indice=0) {
    if (frase.constructor != String) {
        throw TypeError('El primer argumento debe ser una cadena de caracteres.');
    }

    if (typeof indice != 'number' || !Number.isInteger(indice)) {
        throw TypeError('El segundo argumento debe ser un número entero.');
    }

    if (indice < 0 || indice >= frase.length) {
        throw Error(`El índice debe ser un valor entre 0 y ${frase.length - 1}.`);
    }

    return frase.charAt(indice).toUpperCase() === frase.charAt(indice);
}

try {
    console.log(estaEnMayuscula('JavaScript')); // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(estaEnMayuscula('JavaScript', 4)); // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(estaEnMayuscula('JavaScript', 3)); // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(estaEnMayuscula(new Set(), 3)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(estaEnMayuscula('JavaScript', 'UNO')); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(estaEnMayuscula('JavaScript', -1)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(estaEnMayuscula('JavaScript', 13)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
