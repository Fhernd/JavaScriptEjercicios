// Ejercicio 876: Definir una función para contar el número de ocurrencias de un valor en un arreglo.

function contarOcurrencias(datos, valor) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento «datos» debe ser un arreglo.');
    }

    return datos.reduce((a, v) => (v === valor ? a + 1 : a), 0);
}

try {
    console.log(contarOcurrencias([2, 2, 3, 2, 3, 5, 7, 7, 3, 3, 2], 2));   // 4
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(contarOcurrencias([2, 2, 3, 2, 3, 5, 7, 7, 3, 3, 2], 5));   // 1
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(contarOcurrencias([2, 2, 3, 2, 3, 5, 7, 7, 3, 3, 2], 7));   // 2
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(contarOcurrencias([2, 2, 3, 2, 3, 5, 7, 7, 3, 3, 2], 11));   // 0
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(contarOcurrencias(null, 11));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
