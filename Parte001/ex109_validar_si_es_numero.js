// Ejercicio 109: Validar si un valor no es un número por medio de Number.isNaN().

let valor = 'a123abc';

let numero = Number.parseInt(valor);

console.log(typeof numero);
console.log(numero);

console.log(Number.isNaN(numero));

console.log();

let objetoNumber = new Number(valor);

console.log(typeof objetoNumber);
console.log(objetoNumber instanceof Number);
console.log(objetoNumber);
console.log(Number.isNaN(objetoNumber));
