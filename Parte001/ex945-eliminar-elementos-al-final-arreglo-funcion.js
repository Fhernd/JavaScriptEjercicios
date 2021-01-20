// Ejercicio 945: Eliminar elementos al final de un arreglo hasta que se cumpla una condición.

// [1, 2, 3, 4, 5]
// condición: n < 3
// [3, 4, 5]

function eliminarMientrasFinal(datos, fn) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento «datos» debe ser un arreglo.');
    }

    if (typeof fn != 'function') {
        throw TypeError('El argumento «fn» debe ser una función.');
    }

    for(let i of datos.reverse().keys()) {
        if (fn(datos[i])) {
            return datos.reverse().slice(datos.length - i, datos.length);
        }
    }

    return datos;
}

try {
    console.log(eliminarMientrasFinal([1, 2, 3, 4, 5], n => n < 3));    // [3, 4, 5]
} catch (e) {
    console.log((`Error: ${e.message}`));
}

console.log();

try {
    console.log(eliminarMientrasFinal(new Map(), n => n < 3));    // Error
} catch (e) {
    console.log((`Error: ${e.message}`));
}

console.log();

try {
    console.log(eliminarMientrasFinal([1, 2, 3, 4, 5], 1000));    // Error
} catch (e) {
    console.log((`Error: ${e.message}`));
}
