// Ejercicio 1441: Implementar el algoritmo de ordenamiento counting sort en una función.

function countingSort(datos, minimo, maximo) {
    let contadores = [];
    let contador = 0;

    for (let i = 0; i < maximo; i++) {
        contadores[i] = 0;
    }

    for (let i = 0; i < maximo; i++) {
        contadores[datos[i]]++;
    }

    for (let i = minimo; i <= maximo; i++) {
        while (contadores[i]-- > 0) {
            datos[contador++] = i;
        }
    }

    return datos;
}

let primos = [13, 2, 19, 5, 3, 7, 11, 23];
console.log(primos);

console.log();

let resultado = countingSort(primos, 2, 23);
console.log(resultado);
