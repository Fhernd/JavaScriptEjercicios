// Ejercicio 934: Usar la función every() para validar si todos los elementos de un arreglo cumplen una condición.

let numeros = [7, 3, 5, 2, 11, 13];

let resultado = numeros.every((n) => n >= 2);
console.log(resultado); // true

console.log();

numeros.push(1);

resultado = numeros.every((n) => n >= 2);
console.log(resultado); // false
