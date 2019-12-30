// Ejercicio 306: Comprobar si una cadena de caracteres corresponde con un número binario.

let patron = /^[01]+$/;

let verificarBinario = new RegExp(patron);

let cadena = '10111';

console.log(verificarBinario.test(cadena));

cadena = '10012';

console.log(verificarBinario.test(cadena));
