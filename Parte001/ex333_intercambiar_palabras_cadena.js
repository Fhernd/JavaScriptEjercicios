// Ejercicio 333: Intercambiar dos palabras en una cadena usando paréntesis de captura.

// John Ortiz => Ortiz John

let nombre = 'John Ortiz';
let patron = /^(\w+)\s(\w+)$/;

let resultado = nombre.replace(patron, '$2, $1')

console.log(nombre);
console.log(resultado);
