// Ejercicio 839: Crear una función para omitir ciertos elementos de un arreglo.

function omitirElementos(datos, ...datosOmitidos) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento «datos» debe ser un arreglo.');
    }

    return datos.filter(d => !datosOmitidos.includes(d));
}

try {
    console.log(omitirElementos([2, 1, 3, 3, 1, 5, 7], 1, 3));  // [2, 5, 7]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(omitirElementos(true, 1, 3));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
