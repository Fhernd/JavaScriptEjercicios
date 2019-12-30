// Ejercicio 299: Buscar números enteros en un texto con una expresión regular.

let texto = 'La edad de Daniela es 29. Hoy es 11 de diciembre de 2019.';

let patron = /\d+/g;

let numeros = texto.match(patron).map(Number);

console.log(numeros);
console.log(typeof numeros[0]);
