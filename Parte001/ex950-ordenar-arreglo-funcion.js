// Ejercicio 950: Ordenar un arreglo sin modificar el arreglo original (crear uno nuevo).

function ordenar(datos, comparar) {
    if (!Array.isArray(datos)) {
        throw TypeError('El primer argumento debe ser un arreglo.');
    }

    if (typeof comparar != 'function') {
        throw TypeError('El segundo argumento debe ser una función.');
    }

    return datos.sort();
}

try {
    console.log(ordenar([2, 1, 3, 7, 5], () => 0));  // [1, 2, 3, 5, 7]
} catch (e) {
    console.log(`Error: ${e.message}`);
}
