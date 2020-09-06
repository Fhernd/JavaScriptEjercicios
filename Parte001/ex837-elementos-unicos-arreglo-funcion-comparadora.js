// Ejercicio 837: Obtener los elementos comunes entre dos arreglos especificando una función comparadora.

function interseccion(datos1, datos2, comparacion) {
    if (!Array.isArray(datos1) || !Array.isArray(datos2)) {
        throw TypeError('Los argumentos «datos1» y «datos2» deben ser arreglos.');
    }

    if (typeof comparacion !== 'function') {
        throw TypeError('El argumento «comparacion» debe ser una función.');
    }

    let conjunto1 = [...datos1.map(d => comparacion(d))];
    let conjunto2 = [...datos2.map(d => comparacion(d))];

    return Array.from(new Set([...conjunto1].filter(e => new Set(conjunto2).has(e))));
}

try {
    console.log(interseccion([1.1, 1.7, 2.3, 3.5], [4.3, 1.5, 2.7, 9.7, 6.6], Math.round));  // [1, 2, 2, 4], [4, 2, 3, 10, 7] => [2, 4]
} catch (e) {
    console.log(`Error: ${e.message}`);
}
