// Ejercicio 303: Crear una expresión regular con la clase RegExp.

let patron = /\d+/i;

let numerosRegex = new RegExp(patron);

let cadena = '123';

console.log(numerosRegex.test(cadena));

console.log();

cadena = 'abc';
console.log(numerosRegex.test(cadena));
