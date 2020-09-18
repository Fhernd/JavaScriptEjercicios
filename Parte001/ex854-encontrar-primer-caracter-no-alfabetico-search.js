// Ejercicio 854: Usar la función search() del objeto String para encontrar el primer carácter no alfabético.

let lenguaje = 'JavaScript es un lenguaje de programación. Facilita la creación de aplicaciones Web.';

let patron = /[^\w\sáéíóú]/g;

let indice = lenguaje.search(patron);

console.log(indice);

console.log(lenguaje[indice]);
