// Ejercicio 851: Usar la función slice() del objeto String para tomar una sección de un texto.

let lenguaje = 'JavaScript es un lenguaje de programación';

console.log(lenguaje);

console.log();

console.log(lenguaje.slice(0, 10));  // JavaScript
console.log(lenguaje.slice(11));  // es un lenguaje de programación

console.log();

console.log(lenguaje.slice(lenguaje.lastIndexOf('p'))); // programación
console.log(lenguaje.slice(-12));   // programación
