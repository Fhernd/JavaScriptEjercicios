// Ejercicio 1209: Definir una función para clonar el contenido entero de un arreglo.

function clonarArreglo(arreglo) {
    if (!Array.isArray(arreglo)) {
        throw TypeError('El argumento debe ser un arreglo.');
    }

    return arreglo.slice(0);
}

let copiaArreglo = clonarArreglo([2, 3, 5, 7]);
console.log(copiaArreglo);  // [2, 3, 5, 7]

try {
    clonarArreglo({});  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
