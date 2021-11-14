// Ejercicio 1427: Demostrar el uso básico de la función log() del objeto console.

// console: es el medio con el que podemos acceder a la consola de depuración del navegador. Ambiente de tipo NodeJS.

// log(): permite mostrar información en la consola.

let id = 1001;
let nombre = 'Lina';
let email = 'lina@mail.co';

console.log(nombre);    // 'Lina'

console.log();  // Se genera un salto de línea \n

console.log(id, nombre, email); // 1001 Lina lina@mail.co

console.log();

let persona = {
    id: id,
    nombre: nombre,
    email: email
}

console.log(persona);

console.log();

console.log('😍😍😍😍😍');
