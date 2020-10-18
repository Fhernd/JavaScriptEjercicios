// Ejercicio 888: Uso de la excepción RangeError para la validación de valores numéricos en una función.

function validarNumero(numero) {
    if (typeof numero != 'number') {
        throw TypeError('El argumento debe ser un valor numérico.');
    }

    if (!(numero >= 0 && numero <= 100)) {
        throw RangeError('El argumento debe ser un número en el rango 0 a 100.');
    }

    return true;
}

try {
    console.log(validarNumero(50)); // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(validarNumero({a: 50})); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(validarNumero(200)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
