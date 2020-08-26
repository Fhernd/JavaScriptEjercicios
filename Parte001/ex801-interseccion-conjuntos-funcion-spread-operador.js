// Ejercicio 801: Computar la intersección de dos conjuntos por medio del operador de propagación (...).

function interseccion(A, B) {
    if (!Array.isArray(A) || !Array.isArray(B)) {
        throw TypeError('Los dos argumentos deben ser arreglos.');
    }

    B = new Set(B);

    return new Set([...A].filter((e) => B.has(e)));
}

try {
    console.log(interseccion([1, 2, 3], [2, 3, 4]));    // {2, 3}
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(interseccion([1, 2, 3], [4, 5, 6]));    // {}
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(interseccion(new Set(), [4, 5, 6]));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
