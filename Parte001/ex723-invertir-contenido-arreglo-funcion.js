// Ejercicio 723: Crear una función personalizada para invertir el contenido de un arreglo.

// [1, 2, 3] => [3, 2, 1]

function invertirArreglo(elementos) {
    if (elementos instanceof Array) {
        let invertido = [];

        for (let i = elementos.length - 1; i >= 0; --i) {
            invertido.push(elementos[i]);
        }

        return invertido;
    } else {
        throw TypeError('El argumento de esta función debe ser un arreglo.');
    }
}

try {
    console.log(invertirArreglo([1, 2, 3]));    // [3, 2, 1]
} catch (e) {
    console.log(e.message);
}

console.log();

try {
    console.log(invertirArreglo([]));    // []
} catch (e) {
    console.log(e.message);
}

console.log();

try {
    console.log(invertirArreglo("[1, 2, 3]"));    // Error
} catch (e) {
    console.log(e.message);
}

console.log();

try {
    console.log(invertirArreglo(['JS', 'Python', 'C++']));    // ['C++', 'Python', 'JS'];
} catch (e) {
    console.log(e.message);
}
