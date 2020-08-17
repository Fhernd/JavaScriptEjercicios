// Ejercicio 744: Crear una función para obtener el enésimo elemento mayor en un arreglo no ordenado.

function obtenerEnesimoElemento(numeros, n) {
    if (numeros instanceof Array) {
        if (typeof n === 'number') {
            if (Number.isInteger(n)) {
                if (n >= 0 && n < numeros.length) {
                    numeros.sort((a, b) => a - b);
                    console.log(numeros);

                    return numeros[n];
                } else {
                    throw Error(`El segundo argumento debe ser un número mayor o igual a 0 y menor a la cantidad de elementos que tiene el arreglo (${numeros.length}).`);
                }
            } else {
                throw Error('El segundo argumento debe ser un número entero.');
            }
        } else {
            throw TypeError('El segundo argumento debe ser un número.');
        }
    } else {
        throw TypeError('El primer argumento debe ser un arreglo.')
    }
}

try {
    console.log(obtenerEnesimoElemento([3, 2, 7, 11, 5, 13, 29, 23], 3)); // [2, 3, 5, 7, 11, 13, 23, 29]
} catch (e) {
    console.log(`Error: ${e.message}`);
}
