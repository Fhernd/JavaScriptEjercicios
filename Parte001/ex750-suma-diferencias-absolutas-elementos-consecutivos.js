// Ejercicio 750: Calcular la suma de las diferencias absolutas de elementos contiguos en un arreglo.

// [2, 7, 3, 5, 11, 7, 2]
// [5, 4, 2, 6, 4, 5] => 26

function calcularDiferenciaAbsoluta(numeros) {
    if (numeros instanceof Array) {
        if (numeros.length >= 2) {
            let suma = 0;

            for(let i = 0; i < numeros.length - 1; ++i) {
                suma += Math.abs(numeros[i] - numeros[i + 1]);
            }

            return suma;
        } else {
            throw Error('El arreglo debe tener al menos 2 elementos.');
        }
    } else {
        throw TypeError('El argumento debe ser un arreglo.');
    }
}

try {
    console.log(calcularDiferenciaAbsoluta([2, 7, 3, 5, 11, 7, 2]));    // 26
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(calcularDiferenciaAbsoluta('[2, 7, 3, 5, 11, 7, 2]'));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(calcularDiferenciaAbsoluta([2]));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
