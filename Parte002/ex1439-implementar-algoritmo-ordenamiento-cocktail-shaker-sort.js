// Ejercicio 1439: Implementar el algoritmo de ordenamiento cocktail shaker sort en una función.

function cocktailShakerSort(datos) {
    let ordenado = true;

    while (ordenado) {
        for (let i = 0; i < datos.length - 1; i++) {
            if (datos[i] > datos[i + 1]) {
                [datos[i], datos[i + 1]] = [datos[i + 1], datos[i]];
                ordenado = true;
            }
        }

        if (!ordenado) {
            break;
        }

        ordenado = false;

        for (let j = datos.length - 1; j > 0; --j) {
            if (datos[j - 1] > datos[j]) {
                [datos[j], datos[j - 1]] = [datos[j - 1], datos[j]];
                ordenado = true;
            }
        }
    }
}

let primos = [13, 2, 19, 5, 3, 7, 11, 23];
console.log(primos);

console.log();

cocktailShakerSort(primos);
console.log(primos);
