// ,Ejercicio 833: Definir una función para obtener los valores no repetidos de un arreglo.

// [2, 3, 5, 3, 7, 11, 5, 13]
// d = 2
// indexOf(2) => 0
// lastIndexOf(2) => 0

// d = 3
// indexOf(3) => 1
// lastIndexOf(3) => 3

function obtenerElementosNoRepetidos(datos) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento debe ser un arreglo.');
    }

    return datos.filter(d => datos.indexOf(d) === datos.lastIndexOf(d));
}

try {
    console.log(obtenerElementosNoRepetidos([2, 3, 5, 3, 7, 11, 5, 13]));   // [2, 7, 11, 13]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerElementosNoRepetidos({a: 1}));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
