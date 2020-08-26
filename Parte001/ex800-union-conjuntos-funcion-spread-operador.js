// Ejercicio 800: Computar la unión de dos conjuntos por medio del operador de propagación (spread).

// spread operator: ...

function union(A, B) {
    if (!Array.isArray(A) || !Array.isArray(B)) {
        throw TypeError('Ambos argumentos deben ser arreglos.');
    }

    let C = new Set([...A, ...B]);

    return C;
}

try {
    console.log(union([1, 2, 3], [2, 3, 4]));   // {1, 2, 3, 4}
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(union(new Set(), [2, 3, 4]));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(union([1, 2, 3], new Object()));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
