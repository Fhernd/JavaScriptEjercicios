// Ejercicio 1111: Replicar una cadena de caracteres n cantidad de veces con una función.

// ¡JS!
// n = 5
// ¡JS!¡JS!¡JS!¡JS!¡JS!

function replicarCadena(texto, n=5) {
    if (texto.constructor != String) {
        throw TypeError('El primer argumento debe ser una cadena de caracteres.');
    }

    return new Array(n + 1).join(texto);
}

try {
    console.log(replicarCadena('¡JS!'));    // ¡JS!¡JS!¡JS!¡JS!¡JS!
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(replicarCadena('¡JS!', 10));    // ¡JS!¡JS!¡JS!¡JS!¡JS!¡JS!¡JS!¡JS!¡JS!¡JS!
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(replicarCadena(new Set(), 10));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
