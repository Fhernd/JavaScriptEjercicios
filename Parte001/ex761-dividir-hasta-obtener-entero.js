// Ejercicio 761: Crear una función para dividir un número entre otro mientras que el cociente sea entero.

function dividir(dividendo, divisor) {
    if (typeof dividendo === 'number' && Number.isInteger(dividendo)) {
        if (typeof divisor === 'number' && Number.isInteger(divisor)) {
            if (divisor == 1) {
                return dividendo;
            } else {
                while (dividendo % divisor == 0) {
                    dividendo /= divisor;
                }

                return dividendo;
            }
        } else {
            throw TypeError('El divisor debe ser un número entero.');
        }
    } else {
        throw TypeError('El dividendo debe ser un número entero.');
    }
}

try {
    console.log(dividir(24, 4));    // 6
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(dividir(56, 2));    // 7
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(dividir('56', 2));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(dividir(56.9, 2));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(dividir(56, 2.3));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(dividir(-56, 2));    // -7
} catch (e) {
    console.log(`Error: ${e.message}`);
}
