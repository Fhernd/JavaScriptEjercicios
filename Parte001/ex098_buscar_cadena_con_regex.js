// Ejercicio 98: Buscar texto usando una expresión regular con el método search.

let cadena = 'JavaScript es un lenguaje de programacion';

console.log(cadena.search('J'));
console.log(cadena.search('ó'));

console.log(cadena.search(/\w+$/));
console.log(cadena.indexOf('programacion'));

console.log();

cadena = 'ECMAScript6';

console.log(cadena.search(/[^a-z]/i));
console.log(cadena.indexOf('6'));

cadena = 'ECMAScript';

console.log(cadena.search(/[^a-z]/i));
console.log(cadena.indexOf('6'));
