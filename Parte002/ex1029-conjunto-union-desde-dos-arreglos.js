// Ejercicio 1029: Definir una función para obtener el conjunto unión a partir de dos arreglos.

// A = [2, 3, 3, 5, 2, 7]
// B = [11, 3, 5, 19, 13]
// A + B = {2, 3, 5, 7, 11, 13, 19}

function conjuntoUnion(a, b) {
    if (!Array.isArray(a) || !Array.isArray(b)) {
        throw TypeError('Ambos argumentos deben ser arreglos.');
    }

    let c = [...a, ...b];

    let resultado = new Set(c);

    return Array.from(resultado);
}

let A = [2, 3, 3, 5, 2, 7]
let B = [11, 3, 5, 19, 13]

try {
    console.log(conjuntoUnion(A, B));   // [2, 3, 5, 7, 11, 13, 19]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(conjuntoUnion(100, B));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
