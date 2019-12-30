// Ejercicio 266: Obtener y comparar un elemento Symbol por su nombre.

let symbol1 = Symbol.for('Symbol1');

let auxiliar = Symbol.for('Symbol1');

console.log(symbol1 == auxiliar);
console.log(symbol1 == Symbol.for('Symbol1'));
