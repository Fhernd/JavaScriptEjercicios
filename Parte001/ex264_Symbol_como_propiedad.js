// Ejercicio 264: Usar Symbol() como propiedad identificadora de un objeto.

const ID = Symbol();

let persona = {
    [ID]: '12345',
    nombre: 'Edward',
    apellido: 'Ortiz',
    edad: 33
};

console.log(persona);
