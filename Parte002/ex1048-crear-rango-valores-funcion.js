// Ejercicio 1048: Crear arreglo con determinada cantidad de valores y un rango incremental unitario.

// n = 5
// inicio = 10
// => [10, 11, 12, 13, 14]

function generarArreglo(n, inicio) {
    if (typeof n != 'number' || !Number.isInteger(n)) {
        throw TypeError('El primer argumento debe ser un número entero.');
    }

    if (typeof inicio != 'number') {
        throw TypeError('El segundo argumento debe ser un número.');
    }

    if (n < 0) {
        throw Error('El primer argumento debe ser un número positivo.');
    }

    let arreglo = new Array(n);
    
    for (let i = 0; i < arreglo.length; i++, ++inicio) {
        arreglo[i] = inicio;
    }

    return arreglo;
}

try {
    console.log(generarArreglo(5, 10)); // [10, 11, 12, 13, 14]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(generarArreglo('cinco', 10)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(generarArreglo(5.5, 10)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
