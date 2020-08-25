// Ejercicio 795: Definir función para encontrar la cantidad de números redondos en un arreglo.

// Número redondo: es un número que tiene 1 o más ceros al final.

function obtenerCantidadNumerosRedondos(numeros) {
    if (!Array.isArray(numeros)) {
        throw TypeError('El argumento debe ser un arreglo.');
    }

    if (!numeros.every((n) => typeof n === 'number')) {
        throw TypeError('Todos los elementos del arreglo deben ser números.');
    }

    let contador = 0;

    numeros.forEach((n) => {
        if (n % 10 === 0) {
            ++contador;
        }
    });

    return contador;
}

try {
    console.log(obtenerCantidadNumerosRedondos([2, 10, 3, 100, 50, 7, 11]));    // 3
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerCantidadNumerosRedondos([2, 101, 3, 1002, 503, 7, 11]));    // 0
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerCantidadNumerosRedondos([2, 101, 3, '1002', 503, 7, 11]));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerCantidadNumerosRedondos(new Map()));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
