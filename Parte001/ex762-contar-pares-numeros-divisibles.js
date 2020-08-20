// Ejercicio 762: Obtener la cantidad de pares de números enteros divisibles en un arreglo ordenado.

// [2, 6, 4] => (2, 6), (2, 4) -> 2
// [7, 14, 21] => (7, 14), (7, 21) -> 2
// [7, 14, 28] => (7, 14), (7, 28), (14, 28) -> 3

function contadorParesDivibles(numeros) {
    if (numeros instanceof Array) {
        if (numeros.length >= 2) {
            let contador = 0;

            for(let i = 0; i < numeros.length; ++i) {
                for(let j = i + 1; j < numeros.length; ++j) {
                    if (numeros[i] % numeros[j] === 0 || numeros[j] % numeros[i] === 0) {
                        ++contador;
                    }
                }
            }

            return contador;
        } else {
            throw Error('El arreglo debe tener al menos dos elementos.');
        }
    } else {
        throw TypeError('El argumento debe ser un número entero.');
    }
}

try {
    console.log(contadorParesDivibles([2, 6, 4]));  // 2
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(contadorParesDivibles([7, 14, 21]));  // 2
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(contadorParesDivibles([7, 14, 28]));  // 3
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(contadorParesDivibles(7));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(contadorParesDivibles([7]));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
