// Ejercicio 785: Definir función para obtener la cantidad de dígitos impar de un número específico.

function obtenerCantidadDigitosImpar(numero) {
    if (typeof numero === 'number' && Number.isInteger(numero)) {
        if (numero > 0) {
            let contadorImpares = 0;

            while(numero) {
                contadorImpares += numero % 2 === 1;

                numero = Math.floor(numero / 10);
            }

            return contadorImpares;
        } else {
            throw Error('El número debe ser positivo.');
        }
    } else {
        throw TypeError('El argumento debe ser un número entero.');
    }
}

try {
    console.log(obtenerCantidadDigitosImpar(12345));    // 3
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerCantidadDigitosImpar(1234567));    // 4
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerCantidadDigitosImpar(new Set()));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerCantidadDigitosImpar(-123));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
