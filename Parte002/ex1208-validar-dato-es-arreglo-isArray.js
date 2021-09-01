// Ejercicio 1208: Usar la función isArray() para determinar si un dato es de tipo arreglo (Array).

console.log(Array.isArray('[2, 3, 5]'));    // false
console.log(Array.isArray([2, 3, 5]));    // true
console.log(Array.isArray([]));    // true

console.log();

console.log(Array.isArray(new Array(10)));    // true
console.log(Array.isArray(new Set()));    // false

console.log();

console.log(Array.isArray(undefined));  // false
console.log(Array.isArray(null));   // false
