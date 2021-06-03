// Ejercicio 1121: Remover espacio en blanco al inicio y al final de un texto con una expresión regular.

let frase = '      JavaScript es tremendo       ';

console.log(frase);
console.log(frase.length);  // 35

console.log();

frase = frase.replace(/^\s+|\s+$/g, '');
console.log(frase);
console.log(frase.length);  // 22
