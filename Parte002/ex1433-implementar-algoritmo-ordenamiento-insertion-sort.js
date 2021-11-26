// Ejercicio 1433: Implementar el algoritmo de ordenamiento insertion sort en una función.

function insertionSort(datos) {
    for (let i = 1; i < datos.length; i++) {
        let j = i - 1;
        let auxiliar = datos[i];

        while (j >= 0 && datos[j] > auxiliar) {
            datos[j + 1] = datos[j];
            --j;
        }

        datos[j + 1] = auxiliar;
    }

    return datos;
}

let primos = [13, 2, 19, 5, 3, 7, 11, 23];
console.log(primos);

console.log();

let resultado = insertionSort(primos);
console.log(resultado);
