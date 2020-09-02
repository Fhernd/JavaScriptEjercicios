// Ejercicio 830: Crear una función para remover elementos desde el extremo derecho de un arreglo.

// [1, 2, 3, 4, 5]
// n = 2
// [1, 2, 3]

function eliminarElementosDerecha(datos, n=1) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento «datos» debe ser un arreglo.');
    }

    if (typeof n !== 'number' || !Number.isInteger(n)) {
        throw TypeError('El argumento «n» debe ser un número entero.');
    }

    if (n < 0) {
        throw Error('El argumento «n» debe ser un número positivo.');
    }

    return datos.slice(0, datos.length - n);
}

try {
    console.log(eliminarElementosDerecha([1, 2, 3, 4, 5])); // [1, 2, 3, 4]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(eliminarElementosDerecha([1, 2, 3, 4, 5], 3)); // [1, 2]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(eliminarElementosDerecha([1, 2, 3, 4, 5], 0)); // [1, 2, 3, 4, 5]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(eliminarElementosDerecha({a: 1}, 0)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(eliminarElementosDerecha([1, 2, 3, 4, 5], new Map())); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
