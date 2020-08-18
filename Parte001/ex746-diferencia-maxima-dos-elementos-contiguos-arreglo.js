// Ejercicio 746: Encontrar la mayor diferencia entre dos elementos contiguos en un arreglo.

// [3, 7, 9, 2, 5, 11]
// 7 <- diferencia máxima entre dos elementos contiguos en un arreglo.

function calcularDiferenciaMaxima(numeros) {
    if (numeros instanceof Array) {
        let diferenciaMaxima = -1;
        let temporal;

        for(let i = 0; i < numeros.length - 1; ++i) {
            temporal = Math.abs(numeros[i] - numeros[i + 1]);
            diferenciaMaxima = Math.max(diferenciaMaxima, temporal);
        }

        return diferenciaMaxima;
    } else {
        throw TypeError('El argumento debe ser un arreglo.');
    }
}

try {
    console.log(calcularDiferenciaMaxima([3, 7, 9, 2, 5, 11])); // 7
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(calcularDiferenciaMaxima('[3, 7, 9, 2, 5, 11]')); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(calcularDiferenciaMaxima([3, 7, 23, 9, 2, 5, 11])); // 16
} catch (e) {
    console.log(`Error: ${e.message}`);
}
