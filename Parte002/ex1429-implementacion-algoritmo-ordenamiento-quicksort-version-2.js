// Ejercicio 1429: Implementar el algoritmo de ordenamiento quicksort en una función (solución alternativa).

function quicksort(datos) {
    const auxiliar = [...datos];

    if (auxiliar.length < 2) {
        return auxiliar;
    }

    let indicePivote = Math.floor(datos.length / 2);
    let pivote = auxiliar[indicePivote];

    let [minimo, maximo] = auxiliar.reduce(
        (a, v, i) => {
            if (v < pivote || (v === pivote && i != indicePivote)) {
                a[0].push(v);
            } else if (v > pivote) {
                a[1].push(v);
            }

            return a;
        }, [[], []]
    );

    return [...quicksort(minimo), pivote, ...quicksort(maximo)];
}


let primos = [19, 13, 2, 11, 7, 5, 23, 17];
console.log(primos);

console.log();

let resultado = quicksort(primos);
console.log(resultado); [2, 5, 7, 11, 13, 17, 19, 23];
