// Ejercicio 955: Definir una función para calcular la similitud entre dos arreglos.

function calcularSimilitud(A, B) {
    if (!Array.isArray(A)) {
        throw TypeError('El argumento A debe ser un arreglo.');
    }
    
    if (!Array.isArray(B)) {
        throw TypeError('El argumento B debe ser un arreglo.');
    }

    return A.filter(e => B.includes(e));
}

try {
    console.log(calcularSimilitud([2, 3, 5, 7], [11, 13, 3, 2, 17, 19]));   // [2, 3]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(calcularSimilitud([2, 3, 5, 7], [11, 13, 17, 19]));   // []
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(calcularSimilitud(1000, [11, 13, 17, 19]));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(calcularSimilitud([2, 3, 5, 7], {a: 1}));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
