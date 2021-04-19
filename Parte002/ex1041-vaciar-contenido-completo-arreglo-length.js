// Ejercicio 1041: Vaciar el contenido completo de un arreglo usando la propiedad length.

let numeros = [2, 3, 5, 11, 13];
console.log(numeros);
console.log(numeros.length);    // 5

console.log();

numeros.length = 0;

console.log(numeros);   // []
console.log(numeros.length);    // 0
