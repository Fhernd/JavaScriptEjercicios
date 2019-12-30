// Ejercicio 267: Obtener nombre de un Symbol a partir de una referencia.

let symbol1 = Symbol.for('Symbol1');

console.log(symbol1);
console.log(Symbol.keyFor(symbol1));
