// Ejercicio 820: Obtener todas las combinaciones posibles de los datos contenidos en un arreglo.

// potencia de un conjunto P(A)
// {1, 2, 3} = {{}, {1}, {2}, {3}, {1, 2}, {2, 3}, {1, 3}, {1, 2, 3}}

function obtenerConjuntoPotencia(datos) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento «datos» debe ser un arreglo.');
    }

    return datos.reduce((a, v) => a.concat(a.map(d => [v].concat(d))), [[]]);
}

try {
    console.log(obtenerConjuntoPotencia([1, 2, 3]));
    // [[], [1], [2], [3], [1, 2], [2, 3], [1, 3], [1, 2, 3]]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerConjuntoPotencia('JavaScript')); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
