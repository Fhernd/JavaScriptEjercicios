// Ejercicio 944: Remover elementos de un arreglo mientras se cumpla determinada condición.

function eliminarMientras(datos, fn) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento «datos» debe ser un arreglo.');
    }

    for (const [i, v] of datos.entries()) {
        if (fn(v)) {
            return datos.slice(0, i);
        }
    }

    return datos;
}

try {
    console.log(eliminarMientras([1, 2, 3, 4, 5], (n) => n >= 3));  // [1, 2]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(eliminarMientras([1, 2, 3, 4, 5], (n) => n >= 0));  // []
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

console.log();

try {
    console.log(eliminarMientras('ABC', (n) => n >= 0));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
