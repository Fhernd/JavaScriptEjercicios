// Ejercicio 1185: Determinar con una función si un número dado es potencia de dos (2).

// 4 => 2 ^ 2 = 4 (true)
// 32 => 2 ^ 5 = 32 (true)
// 17 => 2 ^ x => (false)

function esPotenciaDos(numero) {
    if (typeof numero != 'number' || !Number.isInteger(numero)) {
        throw TypeError('El argumento debe ser un número entero.');
    }

    return numero && (numero & (numero - 1)) === 0;
}

try {
    console.log(esPotenciaDos(4));  // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(esPotenciaDos(32)); // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(esPotenciaDos('abc')); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(esPotenciaDos(64.64)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
