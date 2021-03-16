// Ejercicio 1010: Definir una función para extraer el primer elemento de un arreglo.

function extraerPrimerElemento(datos, n = 1) {
    if (!Array.isArray(datos)) {
        throw TypeError('El primer argumento debe ser un arreglo.');
    }

    if (typeof n != 'number') {
        throw TypeError('El segundo argumento debe ser un valor numérico.');
    }

    if (!Number.isInteger(n)) {
        throw TypeError('El segundo argumento debe ser un número entero.');
    }

    if (datos.length == 0) {
        return null;
    }

    if (!Array.isArray(datos[0])) {
        return datos.slice(0, n);
    }

    return datos[0].slice(0, n);
}

try {
    console.log(extraerPrimerElemento([1, 2, 3, 4, 5]));    // 1
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(extraerPrimerElemento([1, 2, 3, 4, 5], 3));    // [1, 2, 3]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(extraerPrimerElemento([1, 2, 3, 4, 5], 10));    // [1, 2, 3, 4, 5]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(extraerPrimerElemento([[1, 2, 3, 4, 5], 6, 7, 8], 2));    // [1, 2]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(extraerPrimerElemento([[1, 2, 3, 4, 5], 6, 7, 8], 2.2));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(extraerPrimerElemento([[1, 2, 3, 4, 5], 6, 7, 8], 'JS'));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(extraerPrimerElemento({a: 1000}, 2));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(extraerPrimerElemento([], 1));    // null
} catch (e) {
    console.log(`Error: ${e.message}`);
}
