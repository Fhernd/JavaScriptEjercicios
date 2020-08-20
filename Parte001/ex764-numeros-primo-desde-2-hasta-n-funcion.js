// Ejercicio 764: Crear una función para generar todos los números primos desde 2 hasta un número n dado.

// n = 5
// [2, 3, 5]

function generarPrimos(n) {
    if (typeof n === 'number' && Number.isInteger(n)) {
        if (n >= 2) {
            let primos = [];
            let hayPrimo = [];

            for(let i = 1; i <= n + 1; ++i) {
                hayPrimo.push(true);
            }

            for(let i = 2; i <= n; ++i) {
                if (hayPrimo[i]) {
                    primos.push(i);

                    // Criba de Eratóstenes:
                    // 2 3 4 5 6 7 8 9 ... n
                    // 2 3 5 7 9 ... n
                    // 2 3 5 7 ... n

                    for (let j = 1; j * i <= n; ++j) {
                        hayPrimo[i * j] = false;
                    }
                }
            }

            return primos;
        } else {
            throw Error('El número debe ser mayor o igual a 2.');
        }
    } else {
        throw TypeError('El argumento debe ser un número entero.');
    }
}

try {
    console.log(generarPrimos(5));  // [2, 3, 5]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(generarPrimos(100));  // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, ..., 97]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(generarPrimos([100]));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(generarPrimos(-2));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
