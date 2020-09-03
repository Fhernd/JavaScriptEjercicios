// Ejercicio 832: Definir una función para obtener cada n-ésimo elemento de un arreglo.

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// n = 3
// [3, 6, 9]
// n = 2
// [2, 4, 6, 8, 10]

function obtenerNesimosElementos(datos, n=1) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento «datos» debe ser un arreglo.');
    }

    if (typeof n !== 'number' && !Number.isInteger(n)) {
        throw TypeError('El argumento «n» debe ser un número entero.');
    }

    return datos.filter((d, i) => i % n == (n - 1));
}

try {
    console.log(obtenerNesimosElementos([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)); // [2, 4, 6, 8, 10]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerNesimosElementos([1, 2, 3, 4, 5, 6, 7, 8, 9, 11], 5)); // [5, 11]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerNesimosElementos('JS', 5)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
