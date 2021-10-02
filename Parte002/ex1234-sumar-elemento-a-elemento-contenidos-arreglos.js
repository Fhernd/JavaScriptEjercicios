// Ejercicio 1234: Sumar elemento a elemento el contenido de dos arreglos.

function sumarElementos(numeros1, numeros2) {
    let n = Math.min(numeros1.length, numeros2.length);
    let resultado = [];

    for (let i = 0; i < n; i++) {
        resultado.push(numeros1[i] + numeros2[i]);
    }

    return resultado;
}

let numeros1 = [1, 2, 3, 4, 5];
let numeros2 = [2, 3, 5];

let resultado = sumarElementos(numeros1, numeros2);
console.log(resultado); // [3, 5, 8]
