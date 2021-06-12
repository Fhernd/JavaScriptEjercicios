// Ejercicio 1143: Determinar si un carácter en una posición (índice) dada está en minúscula o no.

// JavaScript
// indice = 4
// c = S
// => false

// indice = 3
// c = a
// => true

function estaEnMinuscula(frase, indice=0) {
    if (frase.constructor != String) {
        throw TypeError('El primer argumento debe ser una cadena de caracteres.');
    }

    if (typeof indice != 'number' || !Number.isInteger(indice)) {
        throw TypeError('El segundo argumento debe ser un número entero.');
    }

    if (indice < 0 || indice >= frase.length) {
        throw Error(`El índice debe ser un valor entre 0 y ${frase.length - 1}.`);
    }

    return frase.charAt(indice).toLowerCase() === frase.charAt(indice);
}

try {
    console.log(estaEnMinuscula('JavaScript')); // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(estaEnMinuscula('JavaScript', 4)); // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(estaEnMinuscula('JavaScript', 3)); // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(estaEnMinuscula(new Set(), 3)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(estaEnMinuscula('JavaScript', 'UNO')); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(estaEnMinuscula('JavaScript', -1)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(estaEnMinuscula('JavaScript', 13)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

