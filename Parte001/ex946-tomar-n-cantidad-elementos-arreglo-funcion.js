// Ejercicio 946: Crear una función para eliminar n elementos desde el inicio de un arreglo.

function eliminar(datos, n = 1) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento «datos» debe ser un arreglo.');
    }♦«

    if (typeof n != 'number') {
        throw TypeError('El argumento «n» debe ser un número.');
    }

    if (!Number.isInteger(n)) {
        throw TypeError('El argumento «n» debe ser un número entero.');
    }

    return datos.slice(0, n);
}

try {
    console.log(eliminar([1, 2, 3, 4, 5], 2));  // [1, 2]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(eliminar([1, 2, 3, 4, 5], 4));  // [1, 2, 3, 4]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(eliminar([1, 2, 3, 4, 5], 10));  // [1, 2, 3, 4, 5]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(eliminar(1000, 10));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(eliminar([1, 2, 3, 4, 5], 5.5));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
