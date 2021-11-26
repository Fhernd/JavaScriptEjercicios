// Ejercicio 1432: Implementar el algoritmo de ordenamiento heap sort en una función (solución alternativa).

var n;

function heapsortAuxiliar(arreglo, i) {
    let indiceIzquierda = 2 * i + 1;
    let indiceDerecha = 2 * i + 2;

    let maximo = i;

    if (indiceIzquierda < n && arreglo[indiceIzquierda] > arreglo[maximo]) {
        maximo = indiceIzquierda;
    }

    if (indiceDerecha < n && arreglo[indiceDerecha] > arreglo[maximo]) {
        maximo = indiceDerecha;
    }

    if (maximo != i) {
        [arreglo[maximo], arreglo[i]] = [arreglo[i], arreglo[maximo]]; // ES6
        heapsortAuxiliar(arreglo, maximo);
    }
}

function heapsort(datos) {
    const auxiliar = [...datos];
    n = datos.length;

    for (let i = Math.floor(n / 2); i >= 0; --i) {
        heapsortAuxiliar(auxiliar, i);
    }

    for (let i = auxiliar.length - 1; i > 0; --i) {
        [auxiliar[0], auxiliar[i]] = [auxiliar[i], auxiliar[0]];
        --n;
        heapsortAuxiliar(auxiliar, 0);
    }

    return auxiliar;
}

let primos = [13, 2, 19, 5, 3, 7, 11, 23];
console.log(primos);

console.log();

let resultado = heapsort(primos)

console.log(resultado);
