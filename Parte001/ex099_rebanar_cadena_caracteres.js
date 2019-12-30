// Ejercicio 99: Obtener una sección de una cadena de caracteres a través de slice.

let cadena = 'JavaScript es un lenguaje de programación.';

console.log(cadena.slice(4));
console.log(cadena.slice(-13));

console.log();

console.log(cadena.slice(cadena.indexOf('es'), -17));
console.log(cadena.slice(cadena.indexOf('es'), -(cadena.length - cadena.indexOf(' de '))));
console.log(cadena.length);
console.log(cadena.indexOf(' de '));
