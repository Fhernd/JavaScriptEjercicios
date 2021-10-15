// Ejercicio 1242: Encontrar los índices de elementos que dan como suma un valor específico.

// [1, 2, 3, 4, 5]
// valor = 6
// => [0, 4]
// => [1, 3]

function encontrarIndicesSuma(numeros, valor) {
    if (!Array.isArray(numeros)) {
        throw TypeError('El primer argumento debe ser un arreglo.');
    }

    for (let i = 0; i < numeros.length; i++) {
        const a = numeros[i];
        
        for (let j = 0; j < numeros.length; j++) {
            const b = numeros[j];
            
            if (i != j && a + b == valor) {
                return [i, j];
            }
        }
    }

    return null;
}

console.log(encontrarIndicesSuma([1, 2, 3, 4, 5], 6));  // [0, 4]
