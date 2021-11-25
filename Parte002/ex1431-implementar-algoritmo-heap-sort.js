// Ejercicio 1431: Implementar el algoritmo de ordenamiento heap sort en una función.

var n;

function heapAuxiliar(datos, i) {
    let izquierda = 2 * i + 1;
    let derecha = 2 * i + 2;
    let maximo = i;

    if (izquierda < n && datos[izquierda] > datos[maximo]) {
        maximo = izquierda;
    }

    if (derecha < n && datos[derecha] > datos[maximo]) {
        maximo = derecha;
    }

    if (maximo != i) {
        [datos[i], datos[maximo]] = [datos[maximo], datos[i]];
        heapAuxiliar(datos, maximo);
    }
}

function heapSort(datos) {
    n = datos.length;

    for (let i = Math.floor(n / 2); i >= 0; --i) {
        heapAuxiliar(datos, i);
    }

    for (let i = datos.length - 1; i > 0; --i) {
        [datos[0], datos[i]] = [datos[i], datos[0]];
        --n;

        heapAuxiliar(datos, 0);
    }
}

let primos = [13, 2, 19, 5, 3, 7, 11, 23];
console.log(primos);

console.log();

heapSort(primos)

console.log(primos);
