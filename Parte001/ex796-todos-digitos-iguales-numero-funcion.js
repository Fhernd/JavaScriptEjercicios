// Ejercicio 796: Validar si todos los dígitos de un número son todos iguales.

function digitosIguales(numero) {
    if (!typeof numero === 'number' || !Number.isInteger(numero)) {
        throw TypeError('El argumento debe ser un número entero.');
    }

    if (numero <= 0) {
        throw Error('El número debe ser positivo.');
    }

    let digitos = String(numero).split('').map(d => parseInt(d));

    let digito = digitos[0];

    return digitos.every((d) => d == digito);
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
