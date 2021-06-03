// Ejercicio 1122: Truncar una cadena de caracteres hasta cierto número de palabras.

// JavaScript es un lenguaje de programación
// n = 4
// JavaScript es un lenguaje

let frase = 'JavaScript es un lenguaje de programación';
console.log(frase);
console.log(frase.length);

console.log();

let resultado = frase.split(' ').splice(0, 4).join(' ');
console.log(resultado);
console.log(resultado.length);
