// Ejercicio 39: Determinar el tipo de un objeto a través de la propiedad constructor.

let fecha = new Date();
let cadena = new String();

console.log(fecha.constructor);
console.log(cadena.constructor);

console.log(fecha.constructor === Date);
console.log(cadena.constructor === String);
