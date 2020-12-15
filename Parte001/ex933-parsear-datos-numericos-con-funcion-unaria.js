// Ejercicio 933: Convertir un conjunto de datos en números con una función unaria.

function convertir(funcion) {
    if (typeof funcion !== 'function') {
        throw TypeError('El argumento debe ser una función.');
    }

    return valor => funcion(valor);
}

let datos = ['2', '3', '4'];

try {
    console.log(datos.map(convertir(Number.parseInt)));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(datos.map(convertir({})));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
