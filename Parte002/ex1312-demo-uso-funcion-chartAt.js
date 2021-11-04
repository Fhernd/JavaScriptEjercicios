// Ejercicio 1312: Demostrar el uso básico de la función charAt() de un objeto String.

// JavaScript
// indice = 0
// => J
// indice = 4
// => S

let lenguaje = 'JavaScript';
console.log(lenguaje);  // JavaScript
console.log(lenguaje.length);   // 10

console.log();

console.log(`El cáracter que está en la posición 0 es ${lenguaje.charAt(0)}.`);
console.log(`El cáracter que está en la posición 4 es ${lenguaje.charAt(4)}.`);

console.log();

let indice = 0;
console.log(`El cáracter que está en la posición ${indice} es ${lenguaje.charAt(indice)}.`);

indice = 4;

console.log(`El cáracter que está en la posición ${indice} es ${lenguaje.charAt(indice)}.`);
