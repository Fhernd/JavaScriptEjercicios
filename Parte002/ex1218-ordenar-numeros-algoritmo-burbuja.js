// Ejercicio 1218: Ordenar los elementos de un arreglo de números con el algoritmo burbuja.

function ordenarNumeros(numeros) {
    if (!Array.isArray(numeros)) {
        throw TypeError('El argumento debe ser un arreglo.');
    }

    for (let i = 0; i < numeros.length - 1; i++) {
        
        for (let j = 0; j < numeros.length - i - 1; j++) {
            if (numeros[j] > numeros[j + 1]) {
                [numeros[j], numeros[j + 1]] = [numeros[j + 1], numeros[j]];
            }
        }
    }
}

let datos = [-7, 2, -13, 5, 11, 7];

try {
    console.log(datos);

    console.log();

    ordenarNumeros(datos);

    console.log(datos);
} catch (e) {
    console.log(`Error: ${e.message}`);
}
