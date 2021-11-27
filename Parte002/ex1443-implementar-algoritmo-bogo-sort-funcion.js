// Ejercicio 1443: Implementar el algoritmo de ordenamiento Bogosort en una función.

function bogoSort(datos) {
    function estaOrdenado(arreglo) {
        for (let i = 1; i < arreglo.length; ++i) {
            if (arreglo[i - 1] > arreglo[i]) {
                return false;
            }
        }

        return true;
    }

    function aleatorizar(arreglo) {
        let n = arreglo.length;
        let indice;

        while (n > 0) {
            indice = Math.floor(Math.random() * n);
            --n;

            [arreglo[indice], arreglo[n]] = [arreglo[n], arreglo[indice]];
        }

        return arreglo;
    }

    function ordenar(arreglo) {
        let ordenado = false;

        while(!ordenado) {
            arreglo = aleatorizar(arreglo);
            ordenado = estaOrdenado(arreglo);
        }

        return arreglo;
    }

    return ordenar(datos);
}

let primos = [13, 2, 19, 5, 3, 7, 11, 23];
console.log(primos);

console.log();

let resultado = bogoSort(primos);
console.log(resultado);
