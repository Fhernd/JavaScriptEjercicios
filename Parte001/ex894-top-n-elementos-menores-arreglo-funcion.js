// Ejercicio 894: Crear una función para obtener el top n de elementos menores de un arreglo.

function obtenerTopNMenores(numeros, n = 1) {
    if (!Array.isArray(numeros)) {
        throw TypeError('El argumento «numeros» debe ser un arreglo.');
    }

    if (!numeros.every(e => typeof e === 'number')) {
        throw TypeError('El argumento «numeros» sólo debe contener valores numéricos.');
    }

    if (typeof n !== 'number') {
        throw TypeError('El argumento «n» debe ser un número.');
    }

    if (n < 0) {
        throw Error('El argumento «n» debe ser un número positivo.');
    }

    return [...numeros].sort((a, b) => a - b).slice(0, n);
}

try {
    console.log(obtenerTopNMenores([7, 2, 13, 5, 3], 3)); // [2, 3, 5]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerTopNMenores([7, 2, 13, 5, 3], 2)); // [2, 3]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerTopNMenores([7, 2, 13, 5, 3])); // [2]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerTopNMenores({}, 2)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerTopNMenores([7, 2, 13, 5, 3], new Set())); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
