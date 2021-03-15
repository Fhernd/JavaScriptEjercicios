// Ejercicio 1009: Usar la función slice() para clonar el contenido de un arreglo.

let numeros = [2, 3, 5, 7, 11];
console.log(numeros);

console.log();

let numerosClone = numeros.slice(0);
console.log(numerosClone);

console.log(numeros == numeros);    // true
console.log(numeros == numerosClone);   // false

console.log();

let matriz = [[1, 2], [3, 4], [5, 6]];
console.log(matriz);

console.log();

let matrizClone = matriz.slice(0);
console.log(matrizClone);
console.log(matriz == matriz);  // true
console.log(matriz == matrizClone); // false
