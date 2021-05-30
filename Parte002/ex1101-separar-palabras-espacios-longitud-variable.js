// Ejercicio 1101: Espaciado variable entre las palabras de una frase.

let frase = 'JavaScript es      un lenguaje  de                      programación';
console.log(frase);

console.log();

let palabras = frase.split(' ');
console.log(palabras);
console.log(palabras.length);   // 33

console.log();

palabras = frase.split(/\s+/)
console.log(palabras);
console.log(palabras.length);   // 6
