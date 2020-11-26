// Ejercicio 921: Crear una función personalizada para calcular la unión de dos arreglos.

function union(a, b) {
    if (!Array.isArray(a)) {
        throw TypeError('El primer argumento debe ser un arreglo.');
    }
    
    if (!Array.isArray(b)) {
        throw TypeError('El segundo argumento debe ser un arreglo.');
    }

    return Array.from(new Set([...a, ...b]));
}

try {
    console.log(union([1, 2, 3, 4, 5], [2, 3, 5, 7, 11, 13]));  // [1, 2, 3, 4, 5, 7, 11, 13]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(union({}, [2, 3, 5, 7, 11, 13]));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(union([1, 2, 3, 4, 5], new Map()));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
