// Ejercicio 296: Buscar texto en una cadena de caracteres con una expresión regular.

let frase = 'JavaScript es un lenguaje de programación interpretado';

let patron = /lenguaje/i;
console.log(frase.search(patron));

console.log();

patron = /javascript/i;
console.log(frase.search(patron));

console.log();

patron = /Lenguaje/i;
console.log(frase.search(patron));
