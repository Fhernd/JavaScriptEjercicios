// Ejercicio 887: Usar una expresión de flecha para ordenar el contenido de un arreglo de números.

let numeros = [11, 3, 13, 2, 7, 5];
console.log(numeros);

console.log();

numeros.sort((a, b) => b - a);
console.log(numeros);

console.log();

numeros.sort((a, b) => a - b);
console.log(numeros);
