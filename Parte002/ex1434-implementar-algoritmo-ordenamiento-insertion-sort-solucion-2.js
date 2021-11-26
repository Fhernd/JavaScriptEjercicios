// Ejercicio 1434: Implementar el algoritmo de ordenamiento insertion sort en una función (solución alternativa).

// ES6

function insertionSort(datos) {
    return datos.reduce((a, e) => {
        if (!a.length) {
            return [e];
        }

        a.some((b, c) => {
            if (e <= b) {
                a.splice(c, 0, e);
                return true;
            }

            if (e > b && c === a.length - 1) {
                a.splice(c + 1, 0, e);
                return true;
            }

            return false;
        });

        return a;
    }, []);
}

let primos = [13, 2, 19, 5, 3, 7, 11, 23];
console.log(primos);

console.log();

let resultado = insertionSort(primos);
console.log(resultado);
