// Ejercicio 902: Crear una función para mover los elementos de un arreglo cierta cantidad de posiciones.

function moverElementosArreglo(datos, posiciones) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento «datos» debe ser un arreglo.');
    }

    if (typeof posiciones != 'number') {
        throw TypeError('El argumento «posiciones» debe ser un número.');
    }

    if (!Number.isInteger(posiciones)) {
        throw Error('El argumento «posiciones» debe ser un número entero.');
    }

    if (datos.length == 0) {
        return datos;
    }

    return [...datos.slice(posiciones), ...datos.slice(0, posiciones)];
}

try {
    console.log(moverElementosArreglo([1, 2, 3, 4, 5], 3)); // [4, 5, 1, 2, 3]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(moverElementosArreglo([1, 2, 3, 4, 5], -2)); // [4, 5, 1, 2, 3]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(moverElementosArreglo([1, 2, 3, 4, 5], -1)); // [5, 1, 2, 3, 4]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(moverElementosArreglo({a: 1}, -1)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(moverElementosArreglo([1, 2, 3, 4, 5], '123')); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(moverElementosArreglo([1, 2, 3, 4, 5], 1.1)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
