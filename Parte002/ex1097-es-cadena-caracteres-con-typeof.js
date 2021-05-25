// Ejercicio 1097: Usar el operador unario typeof para validar si un valor es de tipo cadena de caracteres.

console.log(typeof true == 'string');  // false
console.log(typeof false == 'string');  // false
console.log(typeof 42 == 'string');  // false
console.log(typeof {a: 42} == 'string');  // false
console.log(typeof new Set() == 'string');  // false
console.log(typeof new Map() == 'string');  // false
console.log(typeof [] == 'string');  // false
console.log(typeof new Array() == 'string');  // false

console.log();

console.log(typeof '' == 'string');    // true
console.log(typeof "" == 'string');    // true
console.log(typeof `` == 'string');    // true
console.log(typeof new String() == 'string');    // ?
console.log(typeof 'John Ortiz Ordoñez' == 'string');    // true
console.log(typeof '                            ' == 'string');    // true
