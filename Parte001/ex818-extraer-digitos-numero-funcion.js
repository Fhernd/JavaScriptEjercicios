// Ejercicio 818: Definir una función para extraer los dígitos de un número.

// 1234 => [1, 2, 3, 4]

function extraerDigitos(numero) {
    if (typeof numero !== 'number' || !Number.isInteger(numero)) {
        throw TypeError('El argumento «numero» debe ser un número entero.');
    }

    if (numero < 0) {
        return null;
    }

    return [...`${numero}`].map(c => parseInt(c));
}

try {
    console.log(extraerDigitos(1234));  // [ 1, 2, 3, 4];
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(extraerDigitos(9737));  // [ 9, 7, 3, 7];
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(extraerDigitos(new Object()));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(extraerDigitos(1234.37));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(extraerDigitos(-1234));  // null
} catch (e) {
    console.log(`Error: ${e.message}`);
}
