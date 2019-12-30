// Ejercicio 13: Creación de una constante con la sentencia const.

var nombre = 'Edward';
let lenguaje = 'JavaScript';
const PI = 3.141592;

nombre = 'Edward Ortiz';
lenguaje = 'JavaScript ES6';
// PI = 3.1415; // Genera error (TypeError)

const estudiante = {'id': 6, nombre: 'Germán Ortiz'};

console.log(estudiante);

estudiante.id = 7;

console.log(estudiante);

// Genera error:
// estudiante = {'id': 8, nombre: 'Daniela Ortiz'};

// console.log(estudiante);
