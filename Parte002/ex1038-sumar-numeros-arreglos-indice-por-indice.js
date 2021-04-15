// Ejercicio 1038: Sumar los números de dos arreglos índice a índice.

let numeros1 = [1, 2, 3, 4, 5];
let numeros2 = [6, 7, 8, 9, 10, 11, 12, 13];

let menorLongitud = Math.min(numeros1.length, numeros2.length);

let resultado = [];

for(let i = 0; i < menorLongitud; ++i) {
    resultado.push(numeros1[i] + numeros2[i]);
}

console.log(resultado); // [7, 9, 11, 13, 15]
