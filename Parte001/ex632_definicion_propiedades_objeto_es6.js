// Ejercicio 632: Simplificar el proceso de definición de propiedades de una literal de objeto.

// ECMAScript 5:
console.log('ECMAScript 5:');

let nombre = 'Edward';
let apellido = 'Ortiz';

let edward = {nombre: nombre, apellido: apellido};

console.log(edward);

console.log();

// ECMAScript 6:
console.log('ECMAScript 6:');

let persona = {nombre, apellido};

console.log(persona);
