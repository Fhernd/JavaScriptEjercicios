// Ejercicio 1395: Remover una llave de un objeto utilizando el operador delete.

let persona = {
    id: 1001,
    nombre: 'Diana',
    email: 'diana@mail.co'
};

console.log(persona);
console.log(Object.keys(persona).length);   // 3

console.log();

delete persona.email;

console.log(persona);
console.log(Object.keys(persona).length); // 2
