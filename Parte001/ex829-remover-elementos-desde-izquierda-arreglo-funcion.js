// Ejercicio 829: Crear una función para remover elementos desde el extremo izquierdo de un arreglo.

// [1, 2, 3, 4, 5]
// n = 2
// [3, 4, 5]

function eliminarElementosIzquierda(datos, n=1) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento «datos» debe ser un arreglo.');
    }

    if (n < 0) {
        throw Error('La cantidad de elementos a eliminar debe ser un número positivo.');
    }

    return datos.slice(n);
}

try {
    console.log(eliminarElementosIzquierda([1, 2, 3, 4, 5]));   // [2, 3, 4, 5]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(eliminarElementosIzquierda([1, 2, 3, 4, 5], 3));   // [4, 5]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(eliminarElementosIzquierda([1, 2, 3, 4, 5], 0));   // [1, 2, 3, 4, 5]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(eliminarElementosIzquierda([1, 2, 3, 4, 5], 10));   // []
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(eliminarElementosIzquierda({a: 1}, 0));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(eliminarElementosIzquierda([1, 2, 3, 4, 5], -5));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
