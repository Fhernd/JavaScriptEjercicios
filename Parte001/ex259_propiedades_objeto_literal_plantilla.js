// Ejercicio 259: Especificar propiedades de un objeto en una literal de plantilla.

let persona = {nombre: 'Edward', apellido: 'Ortiz', email: 'edward@mail.co'};

let frase = 'Su nombre completo es ' + persona.nombre + ' ' + persona.apellido + ' y su correo electrónico es ' + persona.email + '.';

console.log(frase);

frase = `Su nombre completo es ${persona.nombre} ${persona.apellido} y su correo electrónico es ${persona.email}.`;

console.log(frase);
