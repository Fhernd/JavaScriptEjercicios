// Ejercicio 1215: Obtener los últimos n elementos de un arreglo utilizando una función personalizada.

// [1, 2, 3, 4, 5]
// => [4, 5]
// => [3, 4, 5]

function obtenerNUltimosElementos(datos, n=1) {
    if (!Array.isArray(datos)) {
        throw TypeError('El primer argumento debe ser un arreglo.');
    }

    if (n == 1) {
        return datos[datos.length - 1];
    }

    return datos.slice(Math.max(datos.length - n, 0));
}

let numeros = [1, 2, 3, 4, 5];

try {
    console.log(obtenerNUltimosElementos(numeros));   // [5];
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerNUltimosElementos(numeros, 2));   // [4, 5];
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerNUltimosElementos(numeros, 10));   // [1, 2, 3, 4, 5];
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerNUltimosElementos({a: 1000}, 10));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
