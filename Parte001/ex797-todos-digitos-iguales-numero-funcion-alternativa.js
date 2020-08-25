// Ejercicio 797: Validar si todos los dígitos de un número son todos iguales (solución alternativa).

function digitosIguales(numero) {
    if (typeof numero !== 'number' || !Number.isInteger(numero)) {
        throw TypeError('El argumento debe ser un número entero.');
    }

    if (numero <= 0) {
        throw Error('El número debe ser positivo.');
    }

    let primerDigito = numero % 10;

    while(numero) {
        if (primerDigito != numero % 10) {
            return false;
        }

        numero = Math.floor(numero / 10);
    }

    return true;
}

try {
    console.log(digitosIguales(111));   // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(digitosIguales(113));   // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(digitosIguales([1, 1, 1]));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
