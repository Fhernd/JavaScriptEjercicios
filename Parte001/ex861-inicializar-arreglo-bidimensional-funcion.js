// Ejercicio 861: Crear una función para inicializar un arreglo bidimensional con valores específicos.

function generarMatriz(filas, columnas, valor=null) {
    if (typeof filas != 'number' || !Number.isInteger(filas)) {
        throw TypeError('El argumento «filas» debe ser un número entero.');
    }

    if (filas <= 0) {
        throw Error('El argumento «filas» debe ser un número entero positivo.');
    }

    if (typeof columnas != 'number' || !Number.isInteger(columnas)) {
        throw TypeError('El argumento columnas debe ser un número entero.');
    }

    if (columnas <= 0) {
        throw Error('El argumento columnas debe ser un número entero positivo.');
    }

    return Array.from({length: filas}).map(() => Array.from({length: columnas}).fill(valor));
}

try {
    console.log(generarMatriz(3, 5, 0));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(generarMatriz(3, 5));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(generarMatriz(3, 5, 'JS'));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(generarMatriz(3.5, 5, 'JS'));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(generarMatriz(3, -5, 'JS'));
} catch (e) {
    console.log(`Error: ${e.message}`);
}
