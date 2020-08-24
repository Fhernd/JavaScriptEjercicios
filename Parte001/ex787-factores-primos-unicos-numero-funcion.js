// Ejercicio 787: Encontrar todos los factores primos únicos de un número entero dado.

function esPrimo(numero) {
    for(let i = 2; i <= Math.sqrt(numero); ++i) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

function obtenerFactoresPrimos(numero) {
    if (typeof numero === 'number' && Number.isInteger(numero)) {
        if (numero > 0) {
            let primos = [];

            for(let i = 2; i <= numero; ++i) {
                while(esPrimo(i) && numero % i === 0) {
                    if (!primos.includes(i)) {
                        primos.push(i);
                    }

                    numero /= i;
                }
            }

            return primos;
        } else {
            return null;
        }
    } else {
        throw TypeError('El argumento debe ser un número entero.');
    }
}

// 50 => 2, 5, 5 => 2, 5
// 100 => 2, 2, 5, 5 => 5

try {
    console.log(obtenerFactoresPrimos(50)); // [ 2, 5 ]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerFactoresPrimos(100)); // [ 2, 5 ]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

// 80 >= 2, 2, 2, 2, 5, 5

try {
    console.log(obtenerFactoresPrimos(80)); // [ 2, 5 ]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

// 27 => 3, 3, 3

try {
    console.log(obtenerFactoresPrimos(27)); // [ 3 ]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerFactoresPrimos(new Map())); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
