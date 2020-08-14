// Ejercicio 732: Definir una función para intercambiar el primer y último elemento de un arreglo.

// [2, 3, 5] => [5, 3, 2]

function intercambiarElementos(arreglo) {
    if (arreglo instanceof Array) {
        if (arreglo.length) {
            let temporal = arreglo[0];
            arreglo[0] = arreglo[arreglo.length - 1];
            arreglo[arreglo.length - 1] = temporal;

            return arreglo;
        } else {
            throw Error('El arreglo debe tener al menos un elemento.');
        }
    } else {
        throw TypeError('El argumento debe ser un arreglo.');
    }
}

try {
    console.log(intercambiarElementos([2, 3, 5]));  // [5, 3, 2]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(intercambiarElementos([]));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(intercambiarElementos("[2, 3, 5]"));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(intercambiarElementos([2, 3, 5, 7, 13, 17, 19]));  // [19, 3, 5, 7, 13, 17, 2]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(intercambiarElementos([2]));  // [2]
} catch (e) {
    console.log(`Error: ${e.message}`);
}
