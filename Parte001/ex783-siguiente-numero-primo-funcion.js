// Ejercicio 783: Encontrar el siguiente número primo a partir de un valor dado.

function obtenerSiguientePrimo(numero) {
    if (typeof numero === 'number' && Number.isInteger(numero)) {
        if (numero >= 2) {
            let esPrimo;

            for(let i = numero + 1;; ++i) {
                esPrimo = true;

                for(let j = 2; j * j <= i; ++j) {
                    if (i % j === 0) {
                        esPrimo = false;
                        break;
                    }
                }

                if (esPrimo) {
                    return i;
                }
            }
        } else {
            throw Error('El número debe ser mayor o igual a 2.');
        }
    } else {
        throw TypeError('El argumento debe ser un número entero.');
    }
}

try {
    console.log(obtenerSiguientePrimo(2));  // 3
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerSiguientePrimo(3));  // 5
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerSiguientePrimo(17));  // 19
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerSiguientePrimo(97));  // 101
} catch (e) {
    console.log(`Error: ${e.message}`);
}
