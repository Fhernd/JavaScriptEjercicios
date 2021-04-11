// Ejercicio 1034: Encontrar posiciones de valores en un arreglo que sumen un valor dado.

// [100, 300, 100, 400, 150, 290, 90]

function encontrarPosicionesSuma(numeros, valor) {
    if (!Array.isArray(numeros)) {
        throw TypeError('El primer argumento debe ser un arreglo.');
    }

    if (!numeros.every(d => typeof d == 'number')) {
        throw TypeError('Todos los elementos del arreglo deben ser números.');
    }

    if (typeof valor != 'number') {
        throw TypeError('El segundo argumento debe ser un número.');
    }

    for(let i = 0; i < numeros.length; ++i) {
        for(let j = 0; j < numeros.length; ++j) {
            if (i != j) {
                if (numeros[i] + numeros[j] == valor) {
                    return [i, j];
                }
            }
        }
    }

    return [];
}

let numeros = [100, 300, 100, 400, 150, 290, 90];

try {
    console.log(encontrarPosicionesSuma(numeros, 500)); // [0, 3]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(encontrarPosicionesSuma(numeros, 250)); // [0, 4]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(encontrarPosicionesSuma(200, 250)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(encontrarPosicionesSuma([100, 300, 100, 400, 150, 290, 'abc'], 250)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(encontrarPosicionesSuma(numeros, {a: 100})); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
