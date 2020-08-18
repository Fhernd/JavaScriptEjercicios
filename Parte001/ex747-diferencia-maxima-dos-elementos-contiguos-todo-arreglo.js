// Ejercicio 747: Encontrar la mayor diferencia entre todos los pares de elementos en un arreglo.

// [11, 2, 5, 13, 7, 19]
// Diferencias = [9, 6, 2, 8, 3, 11, ...]

function diferenciaMaximaElementos(numeros) {
    if (numeros instanceof Array) {
        if (numeros.length >= 2) {
            let diferenciaMaxima = 0;
            let temporal;

            for(let i = 0; i < numeros.length; ++i) {
                for(let j = 0; j != i && j < numeros.length; ++j) {
                    temporal = Math.abs(numeros[i] - numeros[j]);

                    diferenciaMaxima = Math.max(diferenciaMaxima, temporal);
                }
            }

            return diferenciaMaxima;
        } else {
            throw Error('El arreglo debe tener al menos dos elementos.');
        }
    } else {
        throw TypeError('El argumento debe ser un arreglo.');
    }
}

try {
    console.log(diferenciaMaximaElementos([11, 2, 5, 13, 7, 19]));  // 17
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(diferenciaMaximaElementos("[11, 2, 5, 13, 7, 19]"));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
