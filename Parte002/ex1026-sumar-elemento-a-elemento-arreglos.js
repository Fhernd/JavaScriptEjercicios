// Ejercicio 1026: Definir una función para sumar elemento a elemento el contenido de dos arreglos.

function sumarElementosArreglos(numeros1, numeros2) {
    if (!Array.isArray(numeros1) || !Array.isArray(numeros2)) {
        throw TypeError('Ambos argumentos deben ser arreglos.')
    }

    let longitudMinima = Math.min(numeros1.length, numeros2.length);
    let resultado = [];

    for(let i = 0; i < longitudMinima; ++i) {
        resultado.push(numeros1[i] + numeros2[i]);
    }

    return resultado;
}

try {
    console.log(sumarElementosArreglos([1, 2, 3], [4, 5, 6]));  // [5, 7, 9]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(sumarElementosArreglos([1, 2, 3], [4, 5, 6, 7, 8, 9]));  // [5, 7, 9]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(sumarElementosArreglos(1000, [4, 5, 6, 7, 8, 9]));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
