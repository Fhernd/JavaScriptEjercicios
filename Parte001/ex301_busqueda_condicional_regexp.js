// Ejercicio 301: Realizar una búsqueda condicional de texto con una expresión regular.

let frase = 'JavaScript es un lenguaje de programación.';
let patron = /JavaScript|PHP/g;

let resultado = patron.exec(frase);

console.log(resultado);

console.log();

frase = 'PHP es un lenguaje de programación.';
patron = /JavaScript|PHP/g
resultado = patron.exec(frase);

console.log(resultado);
