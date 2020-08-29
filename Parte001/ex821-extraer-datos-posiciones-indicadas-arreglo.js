// Ejercicio 821: Definir una función para extraer desde un arreglo los datos de posiciones específicadas.

// extracción ~ eliminación

function extraerDatos(datos, ...posiciones) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento «datos» debe ser un arreglo.');
    }

    if (!posiciones.every(p => typeof p === 'number' && Number.isInteger(p) && p >= 0)) {
        throw TypeError('Todos los elementos del arreglo variable deben ser número enteros positivos.');
    }

    let resultado = datos.filter((d, i) => {
        if (!posiciones.includes(i)) {
            return d;
        }
    });

    return resultado;
}

try {
    console.log(extraerDatos([1, 2, 3, 4, 5], 1, 3));   // [1, 3, 5]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(extraerDatos("[1, 2, 3, 4, 5]", 1, 3));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(extraerDatos([1, 2, 3, 4, 5], 'uno', 3));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
