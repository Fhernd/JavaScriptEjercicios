// Ejercicio 194: Crear y acceder propiedades de un objeto.

let persona = {};

console.log(persona);

persona.nombre = 'Daniela';
persona['email'] = 'daniela@mail.com';
persona['correo-e'] = 'daniela@outlook.com';

console.log(persona);

persona.edad = '26';

console.log(persona.nombre);
console.log(persona['nombre']);
console.log(persona['correo-e']);
