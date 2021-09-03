// Ejercicio 1214: Obtener los primeros n elementos de un arreglo utilizando una función personalizada.

function obtenerPrimerosNElementos(datos, n=1) {
    if (!Array.isArray(datos)) {
        throw TypeError('El primer argumento debe ser un arreglo.');
    }

    if (typeof n != 'number' || !Number.isInteger(n)) {
        throw TypeError('El segundo argumento debe ser un número entero.');
    }

    if (n < 0) {
        return [];
    }

    return datos.slice(0, n);
}

let numeros = [1, 2, 3, 4, 5];

try {
    console.log(obtenerPrimerosNElementos(numeros));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerPrimerosNElementos(numeros, 2)); // [1, 2]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerPrimerosNElementos(numeros, 10)); // [1, 2, 3, 4, 5]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerPrimerosNElementos(numeros, 5)); // [1, 2, 3, 4, 5]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerPrimerosNElementos(numeros, numeros.length)); // [1, 2, 3, 4, 5]
} catch (e) {
    console.log(`Error: ${e.message}`);
}
