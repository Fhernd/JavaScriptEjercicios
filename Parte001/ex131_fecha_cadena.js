// Ejercicio 131: Construir un objeto Date a partir de una cadena de caracteres.

let cadena = 'May 21, 1994';
let fechaNacimiento = new Date(cadena);

console.log(typeof fechaNacimiento);
console.log(fechaNacimiento instanceof Date);
console.log(fechaNacimiento);
