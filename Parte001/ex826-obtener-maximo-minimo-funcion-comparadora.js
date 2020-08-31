// Ejercicio 826: Obtener el mínimo o el máximo de un conjunto de valores con función comparadora específica.

function obtenerExtremo(datos, funcionComparadora=(x, y) => x - y) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento «datos» debe ser un arreglo.');
    }

    return datos.reduce((x, y) => (funcionComparadora(x, y) >= 0 ? y : x));
}

let numeros = [13, 2, 5, 7, 19, 3];

try {
    console.log(obtenerExtremo(numeros));   // 2
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerExtremo(numeros, (x, y) => y - x));  // 19
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerExtremo(new Object(), (x, y) => y - x));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
