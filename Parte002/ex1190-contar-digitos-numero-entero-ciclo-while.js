// Ejercicio 1190: Crear una función para contar los dígitos de un número entero con un ciclo while.

function contarDigitosEntero(numero) {
    if (typeof numero != 'number' || !Number.isInteger(numero)) {
        throw TypeError('Debe pasar como argumento un número entero.');
    }

    let contador = 0;

    while (numero >= 1) {
        ++contador;
        numero /= 10;
    }

    return contador;
}

try {
    console.log(contarDigitosEntero(1234)); // 4
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(contarDigitosEntero(98765)); // 5
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(contarDigitosEntero(new Map())); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(contarDigitosEntero(3.14)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
