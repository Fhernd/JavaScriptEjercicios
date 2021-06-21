// Ejercicio 1161: Determinar si un número dado es potencia de dos (2) con una función.

// n = 16
// 2 ^ 4 = 16

// n = 1024
// 2 ^ 10 = 1024

// n = 24
// false

function esPotencia2(numero) {
    if (typeof numero != 'number') {
        throw TypeError('El argumento debe ser un número.');
    }

    return numero && (numero & (numero - 1)) === 0;
}

try {
    console.log(esPotencia2(16));   // true
    console.log(esPotencia2(1024)); // true
    console.log(esPotencia2(24)); // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(esPotencia2(new Set()));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
