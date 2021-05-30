// Ejercicio 1100: Obtener las palabras individuales de una frase a través de la función split().

let frase = 'JavaScript es un lenguaje de programación';
console.log(frase);

console.log();

let palabras = frase.split(' ');
console.log(palabras);
console.log(palabras.length);   // 6

console.log();

frase = 'JavaScript-es-un-lenguaje-de-programación';
console.log(frase);

console.log();

palabras = frase.split('-');
console.log(palabras);
console.log(palabras.length);   // 6
