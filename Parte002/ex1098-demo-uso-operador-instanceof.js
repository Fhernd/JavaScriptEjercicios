// Ejercicio 1098: Usar el operador binario instanceof para validar si un dato es de tipo String.

console.log(true instanceof String);  // false
console.log(42 instanceof String);  // false
console.log({a: 42} instanceof String);  // false
console.log(new Set() instanceof String);  // false
console.log(new Map() instanceof String);  // false
console.log([] instanceof String);  // false
console.log(new Array() instanceof String);  // false

console.log();

console.log('' instanceof String);    // true
console.log("" instanceof String);    // true
console.log(`` instanceof String);    // true
console.log(new String() instanceof String);    // true
console.log('John Ortiz Ordoñez' instanceof String);    // true
console.log('                            ' instanceof String);    // true
