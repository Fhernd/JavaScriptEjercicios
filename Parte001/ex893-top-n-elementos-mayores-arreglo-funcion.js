// Ejercicio 893: Crear una función para obtener el top n de elementos mayores de un arreglo.

function obtenerTopNMayores(numeros, n = 1) {
    if (!Array.isArray(numeros)) {
        throw TypeError('El argumento «numeros» debe ser un arreglo.');
    }

    if (!numeros.every(n => typeof n == 'number')) {
        throw TypeError('El argumento «numeros» sólo debe contener valores numéricos.')
    }

    if (typeof n != 'number') {
        throw TypeError('El argumento «n» debe ser un número.');
    }

    if (n < 0) {
        throw Error('El argumento «n» debe ser un número positivo.');
    }

    return [...numeros].sort((a, b) => b - a).slice(0, n);
}

try {
    console.log(obtenerTopNMayores([7, 2, 13, 5, 3], 2));   // [13, 7]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerTopNMayores([7, 2, 13, 5, 3], 3));   // [13, 7, 5]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerTopNMayores(100, 3));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerTopNMayores([7, 2, 13, {}, 5, 3], 3));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerTopNMayores([7, 2, 13, 5, 3], '3'));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
