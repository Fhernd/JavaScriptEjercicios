// Ejercicio 986: Definir una función para implementar el algoritmo de ordenamiento burbuja.

function orden_burbuja(numeros) {
    let n = numeros.length - 1;
    let intercambiar;

    do {
        intercambiar = false;

        for(let i = 0; i < n; ++i) {
            if (numeros[i] > numeros[i + 1]) {
                let temp = numeros[i];
                numeros[i] = numeros[i + 1];
                numeros[i + 1] = temp;

                intercambiar = true;
            }
        }

        --n;
    } while (intercambiar);

    return numeros;
}

let numeros = [7, 2, 11, 13, 5, 2, 19];
console.log(numeros);

console.log();

let resultado = orden_burbuja(numeros);
console.log(resultado);
