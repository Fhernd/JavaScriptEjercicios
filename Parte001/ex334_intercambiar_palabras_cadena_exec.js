// Ejercicio 334: Intercambiar 2 palabras en una cadena usando paréntesis de captura con exec().

// John Ortiz => Ortiz John

let nombre = 'John Ortiz';
let patron = /^(\w+)\s(\w+)$/;

let resultado = patron.exec(nombre);

let nuevoNombre = `${resultado[2]}, ${resultado[1]}`;

console.log(nombre);
console.log(nuevoNombre);
