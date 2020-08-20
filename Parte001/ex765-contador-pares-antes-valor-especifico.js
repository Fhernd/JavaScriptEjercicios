// Ejercicio 765: Crear una función para contar la cantidad de pares en un arreglo ordenado antes de un valor dado.

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// n = 7
// cantidad pares = 3

function contarPares(numeros, n) {
    if (numeros instanceof Array) {
        if (typeof n === 'number' && Number.isInteger(n)) {
            numeros.sort();
            let contadorPares = 0;

            for(let i = 0; i < numeros.length; ++i) {
                if (numeros[i] % 2 === 0 && numeros[i] <= n) {
                    ++contadorPares;

                    if (numeros[i] === n) {
                        break;
                    }
                }
            }

            return contadorPares;

        } else {
            throw TypeError('El segundo argumento debe ser un número entero.');
        }
    } else {
        throw TypeError('El primer argumento debe ser un arreglo.');
    }
}

try {
    console.log(contarPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7));   // 3
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(contarPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8));   // 4
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(contarPares(100, 8));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(contarPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'ocho'));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
