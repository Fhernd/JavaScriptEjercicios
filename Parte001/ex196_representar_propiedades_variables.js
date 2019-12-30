// Ejercicio 196: Usar variables para representar las propiedades de un objeto.

let nombre = 'nombre';
let apellido = 'apellido';
let edad = 'edad';
let email = 'email';

let persona = {};
persona[nombre] = 'Edward';
persona[apellido] = 'Ortiz';
persona[edad] = 33;
persona[email] = 'edward@mail.co';

console.log(persona);

console.log();

console.log(persona[nombre]);
console.log(persona[apellido]);
console.log(persona[edad]);
console.log(persona[email]);
