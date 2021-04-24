// Ejercicio 1047: Definir una función para intercambiar elementos de un arreglo según posiciones dadas.

// [1, 2, 3, 4, 5]
// i = 0 => [i] = 1
// j = 3 => [j] = 4
// [4, 2, 3, 1, 5]

function intercambiarDatosPorIndices(datos, i=0, j=datos.length-1) {
    if (!Array.isArray(datos)) {
        throw TypeError('El primer argumento debe ser un arreglo.');
    }

    if (typeof i != 'number' || typeof j != 'number') {
        throw TypeError('Los argumentos i y j deben ser números.');
    }

    if (!Number.isInteger(i) || !Number.isInteger(j)) {
        throw TypeError('Los argumentos i y j deben ser números enteros.');
    }

    if ((i < 0 || i >= datos.length) || (j < 0 || j >= datos.length)) {
        throw Error('Los índices no deben sobrepasar los límites de índices que tiene el arreglo.');
    }

    [datos[i], datos[j]] = [datos[j], datos[i]];
}

let numeros = [1, 2, 3, 4, 5];
console.log(numeros);

try {
    intercambiarDatosPorIndices(numeros, 0, 3);   // [1, 2, 3, 4, 5]
    console.log(numeros); // [4, 2, 3, 1, 5]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    intercambiarDatosPorIndices('numeros', 0, 3);   // Error
    console.log(numeros); // [4, 2, 3, 1, 5]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    intercambiarDatosPorIndices(numeros, '0', 3);   // Error
    console.log(numeros); // [4, 2, 3, 1, 5]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    intercambiarDatosPorIndices(numeros, 0, '4');   // Error
    console.log(numeros); // [4, 2, 3, 1, 5]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    intercambiarDatosPorIndices(numeros, 0, 4.3);   // Error
    console.log(numeros); // [4, 2, 3, 1, 5]
} catch (e) {
    console.log(`Error: ${e.message}`);
}
