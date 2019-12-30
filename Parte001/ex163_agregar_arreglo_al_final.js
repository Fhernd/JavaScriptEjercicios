// Ejercicio 163: Agregar un arreglo al final de otro arreglo.

let numeros1 = [1, 2, 3, 4, 5];
let numeros2 = [6, 7, 8, 9, 0];

let resultado = numeros1.concat(numeros2);

console.log(numeros1);
console.log(numeros2);
console.log(resultado);

console.log();

resultado = numeros2.concat(numeros1);
console.log(resultado);
