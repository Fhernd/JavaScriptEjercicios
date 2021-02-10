// Ejercicio 971: Definir una función para determinar si un número dado es primo.

// 5 => 5, 1
// 6 => 1, 2, 3, 6
// 7 => 1, 7

function esPrimo(numero) {
    if (typeof numero != 'number') {
        throw TypeError('El argumento debe ser un número.');
    }

    if (!Number.isInteger(numero)) {
        throw TypeError('El argumento debe ser un número entero.');
    }

    if (numero <= 1) {
        throw Error('El argumento debe ser un número entero positivo.');
    }

    let raiz = Math.floor(Math.sqrt(numero)) + 1;

    for(let i = 2; i < raiz; ++i) {
        if (numero % i == 0) {
            return false;
        }
    }

    return true;
}

try {
    console.log(esPrimo(5));    // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(esPrimo(6));    // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(esPrimo(3));    // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(esPrimo(1.7));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(esPrimo(-1));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(esPrimo('1'));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
