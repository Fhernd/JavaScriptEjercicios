// Ejercicio 1011: Definir una función para extraer el último elemento de un arreglo.

function extraerUltimoElemento(datos, n = 1) {
    if (!Array.isArray(datos)) {
        throw TypeError('El primer argumento debe ser un arreglo.');
    }

    if (typeof n != 'number') {
        throw TypeError('El segundo argumento debe ser un valor numérico.');
    }

    if (!Number.isInteger(n)) {
        throw TypeError('El segundo argumento debe ser un número entero.');
    }

    if (!datos.length) {
        return null;
    }

    if (Array.isArray(datos[datos.length - 1])) {
        return datos[datos.length - 1].slice(0, n);
    }

    return datos[datos.length - 1];
}

try {
    console.log(extraerUltimoElemento([1, 2, 3, 4, [5, 6, 7]]));    // 5
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(extraerUltimoElemento([1, 2, 3, 4, [5, 6, 7]], 2));    // [5, 6]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(extraerUltimoElemento([1, 2, 3, 4, [5, 6, 7]], 10));    // [5, 6, 7]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(extraerUltimoElemento([1, 2, 3, 4, 5, 6, 7], 10));    // 7
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(extraerUltimoElemento({x: 1000}, 10));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(extraerUltimoElemento([], 10));    // null
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(extraerUltimoElemento([1, 2, 3, 4, 5, 6, 7], 3.1415));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(extraerUltimoElemento([1, 2, 3, 4, 5, 6, 7], 'número'));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
