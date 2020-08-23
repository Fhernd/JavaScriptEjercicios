// Ejercicio 784: Definir función para obtener la cantidad de dígitos par de un número específico.

function obtenerCantidadDigitosPar(numero) {
    if (typeof numero === 'number' && Number.isInteger(numero)) {
        if (numero > 0) {
            let contador = 0;

            while (numero) {
                contador += numero % 2 === 0;

                numero = Math.floor(numero / 10);
            }

            return contador;
        } else {
            throw Error('El número debe ser positivo.');
        }
    } else {
        throw TypeError('El argumento debe ser un número entero.');
    }
}

try {
    console.log(obtenerCantidadDigitosPar(12345));  // 2
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerCantidadDigitosPar(123456));  // 3
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerCantidadDigitosPar(123456890));  // 5
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerCantidadDigitosPar(Array()));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerCantidadDigitosPar(12.34));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
