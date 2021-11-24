// Ejercicio 1428: Implementar el algoritmo de ordenamiento quicksort en una función.

function quicksort(datos) {

    if (datos.length <= 1) {
        return datos;
    }

    let izquierdo = [];
    let derecha = [];
    let auxiliar = [];
    let pivote = datos.pop();
    let n = datos.length;

    for (let i = 0; i < n; i++) {
        if (datos[i] <= pivote) {
            izquierdo.push(datos[i]);
        } else {
            derecha.push(datos[i]);
        }
    }

    return auxiliar.concat(quicksort(izquierdo), pivote, quicksort(derecha));
}

let primos = [19, 13, 2, 11, 7, 5, 23, 17];
console.log(primos);

console.log();

let resultado = quicksort(primos);
console.log(resultado); [2, 5, 7, 11, 13, 17, 19, 23];
