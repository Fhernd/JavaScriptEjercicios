// Ejercicio 1037: Definir una función para generar rango de números enteros según un valor de salto dado.

// inicio = 1
// final = 5
// salto = 1
// => [1, 2, 3, 4, 5]

// inicio = 0
// final = -5
// salto = 1
// => [0, -1, -2, -3, -4, -5]

// inicio = 0
// final = -5
// salto = 2
// => [0, -2, -4]

function generarRangoEnteros(inicio, final, salto=1) {
    if (typeof inicio != 'number' || typeof final != 'number' || typeof salto != 'number') {
        throw TypeError('Todos los parámetros deben ser números.');
    }

    if (!Number.isInteger(inicio) || !Number.isInteger(final) || !Number.isInteger(salto)) {
        throw Error('Todos los parámetros deben ser números enteros.');
    }

    if (final < inicio) {
        salto = -salto;
    }

    let rango = [];

    while (salto > 0 ? final >= inicio : final <= inicio) {
        rango.push(inicio);

        inicio += salto;
    }

    return rango;
}

try {
    console.log(generarRangoEnteros(1, 5)); // [1, 2, 3, 4, 5]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(generarRangoEnteros(1, 5, 1)); // [1, 2, 3, 4, 5]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(generarRangoEnteros(1, 5, 2)); // [1, 3, 5]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(generarRangoEnteros(0, -5)); // [0, -1, -2, -3, -4, -5]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(generarRangoEnteros(0, -5, 2)); // [0, -2, -4]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(generarRangoEnteros('0', -5, 2)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
