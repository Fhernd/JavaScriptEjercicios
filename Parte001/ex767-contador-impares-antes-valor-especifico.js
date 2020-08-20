// Ejercicio 767: Crear una función para contar la cantidad de impares en un arreglo ordenado antes de un valor dado.

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// n = 5
// [1, 3, 5] -> 3

function contarImpares(numeros, n) {
    if (numeros instanceof Array) {
        if (typeof n === 'number' && Number.isInteger(n)) {
            numeros.sort();

            let contadorImpares = 0;

            for(let i = 0; i < numeros.length; ++i) {
                if (numeros[i] % 2 === 1 && numeros[i] <= n) {
                    ++contadorImpares;

                    if (numeros[i] === n) {
                        break;
                    }
                }
            }

            return contadorImpares;
        } else {
            throw TypeError('El segundo argumento debe ser un número entero.')
        }
    } else {
        throw TypeError('El primer argumento debe ser un arreglo.');
    }
}

try {
    console.log(contarImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)); // 3
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(contarImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11)); // 5
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(contarImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -1)); // 0
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(contarImpares(100, 5)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(contarImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5.5)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
