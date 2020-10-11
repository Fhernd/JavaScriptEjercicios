// Ejercicio 881: Demostrar el uso de la función Array.from() para crear un arreglo.

// Array.from(coleccion [, funcionMapeo [, argThis]])

let numeros = [1, 2, 3, 4, 5];

let numerosMultiplicadosPor2 = Array.from(numeros, (n) => n * 2);

console.log(numeros);   // [1, 2, 3, 4, 5]
console.log(numerosMultiplicadosPor2); // [2, 4, 6, 8, 10]

console.log();

let lenguajes = ['JavaScript', 'Python', 'Java'];
let lenguajesMayusculas = Array.from(lenguajes, (l) => l.toUpperCase());
console.log(lenguajes);
console.log(lenguajesMayusculas);
