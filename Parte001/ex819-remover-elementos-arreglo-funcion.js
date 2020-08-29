// Ejercicio 819: Definir una función para remover determinados elementos de un arreglo.

// filter()

function removerElementos(datos, ...datosEliminar) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento «datos» debe ser un arreglo.');
    }

    let resultado = datos.filter((d) => !datosEliminar.includes(d));

    return resultado;
}

try {
    console.log(removerElementos([1, 2, 3, 2, 1, 1, 5, 7], 1, 2));    // [3, 5, 7]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(removerElementos(['A', 'B', 'A', 'A', 'C'], 'A'));    // ['B', 'C']
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(removerElementos(new Object(), 'A'));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
