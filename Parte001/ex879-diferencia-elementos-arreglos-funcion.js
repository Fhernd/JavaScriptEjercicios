// Ejercicio 879: Crear una función para determinar la diferencia entre dos arreglos aplicando una función.

// A = [1.2, 3.3, 1.3] => [2, 4, 2]
// B = [1.7, 4.5, 1.5, 5.0] => [2, 5, 2, 5]
// => [4]

function valoresDiferentes(A, B, funcion) {
    if (!Array.isArray(A)) {
        throw TypeError('El argumento «A» no es un arreglo.');
    }

    if (!Array.isArray(B)) {
        throw TypeError('El argumento «B» no es un arreglo.');
    }

    let conjunto = new Set(B.map(e => funcion(e)));

    return A.filter(e => !conjunto.has(funcion(e)));
}

try {
    console.log(valoresDiferentes([1.2, 3.3, 1.3], [1.7, 4.5, 1.5, 5.0], Math.ceil));   // [3.3]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(valoresDiferentes(100, [1.7, 4.5, 1.5, 5.0], Math.ceil));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(valoresDiferentes([1.2, 3.3, 1.3], {}, Math.ceil));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
