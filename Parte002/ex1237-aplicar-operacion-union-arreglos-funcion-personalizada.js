// Ejercicio 1237: Aplicar la operación de unión entre dos arreglo con una función personalizada.

// [2, 3, 5]
// [7, 11, 2, 5]
// => [2, 3, 5, 7, 11]

function unionArreglo(datos1, datos2) {
    return [...new Set([...datos1, ...datos2])];
}

let resultado = unionArreglo([2, 3, 5], [7, 11, 2, 5]);
console.log(resultado);
console.log(resultado.length);
