// Ejercicio 298: Usar una expresión regular para reemplazar texto en una cadena de caracteres.

let frase = 'javascript es un lenguaje de programación interpretado.';
console.log(frase);

let patron = /javascript/i;

frase = frase.replace(patron, 'JavaScript');
console.log(frase);
