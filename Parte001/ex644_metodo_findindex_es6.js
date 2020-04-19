// Ejercicio 644: findIndex() para encontrar el índice del primer elemento en un arreglo que satisfaga una condición.

const array1 = [5, 12, 8, 130, 44];

let isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3

console.log()

isLargeNumber = e => e > 300;
console.log(array1.findIndex(isLargeNumber));
// expected output: -1
