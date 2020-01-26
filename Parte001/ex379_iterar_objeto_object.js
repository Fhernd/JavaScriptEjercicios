// Ejercicio 379: Iterar las propiedades de un objeto creado con la clase Object.

let persona = new Object();
persona.documento = '123456789';
persona.nombre = 'Edward';
persona.edad = 29;
persona.email = 'edward@mail.co';

console.log(persona);
console.log(persona.documento);
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.email);

console.log();

Object.keys(persona).forEach((atributo) => {
    console.log(atributo, persona[atributo])
});
