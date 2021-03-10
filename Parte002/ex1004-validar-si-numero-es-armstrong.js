// Ejercicio 1004: Definir una función para validar si un número dado es de tipo Armstrong.

// 371
// 3^3 + 7^3 + 1^3 = 27 + 343 + 1 = 371

function esNumeroArmstrong(numero) {
    if (typeof numero != 'number') {
        throw TypeError('El argumento debe ser un número.');
    }

    if (!Number.isInteger(numero)) {
        throw TypeError('El argumento debe ser un número entero.');
    }

    if (numero <= 100 || numero > 999) {
        return null;
    }

    let resultado = String(numero).split('').map(c => parseInt(c)).reduce((a, d) => {
        return a + Math.pow(d, 3);
    }, 0);

    return resultado == numero;
}

try {
    console.log(esNumeroArmstrong(371));    // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    // 153
    // 1 ^ 3 + 5 ^ 3 + 3^3 = 1 + 125 + 27 = 153
    console.log(esNumeroArmstrong(153));    // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(esNumeroArmstrong({a: 153}));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(esNumeroArmstrong(153.3));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(esNumeroArmstrong(53));    // null
} catch (e) {
    console.log(`Error: ${e.message}`);
}
