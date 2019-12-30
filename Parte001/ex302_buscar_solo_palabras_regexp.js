// Ejercicio 302: Buscar sólo palabras en una frase con una expresión regular.

let frase = 'JavaScript es un lenguaje de programación. La última versión fue lanzada en junio de 2018';

let patron = /[a-zA-Z]+/g;

let resultado = frase.match(patron);

console.log(resultado);
