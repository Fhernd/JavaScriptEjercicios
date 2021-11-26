// Ejercicio 1435: Implementar el algoritmo de ordenamiento selection sort en una función.

function selectionSort(datos) {
    let auxiliar = [...datos];

    for (let i = 0; i < datos.length; i++) {
        let minimo = auxiliar.slice(i + 1)
                            .reduce((a, e, j) => (e < auxiliar[a] ? j + i + 1 : a), i);
        
        if (minimo != i) {
            [auxiliar[i], auxiliar[minimo]] = [auxiliar[minimo], auxiliar[i]];
        }
    }

    return auxiliar;
}

let primos = [13, 2, 19, 5, 3, 7, 11, 23];
console.log(primos);

console.log();

let resultado = selectionSort(primos);
console.log(resultado);
