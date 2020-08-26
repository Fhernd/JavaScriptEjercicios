// Ejercicio 802: Computar la diferencia de dos conjuntos por medio del operador de propagación (...).

// spread operator (...)

// A = [1, 2, 3]
// B = [2, 3, 4]
// C = A - B = [1]

function diferencia(A, B) {
    if (!Array.isArray(A) || !Array.isArray(B)) {
        throw TypeError('Los dos argumentos deben ser arreglos.');
    }

    B = new Set(B);

    return new Set([...A].filter(e => !B.has(e)));
}

try {
    console.log(diferencia([1, 2, 3], [2, 3, 4]));  // {1}
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(diferencia([1, 2, 3], [1, 2, 3]));  // {}
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(diferencia([1, 2, 3], [3, 1, 2]));  // {}
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(diferencia(new Set(), [3, 1, 2]));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(diferencia([3, 1, 2], new Map()));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
