// Ejercicio 866: Explorar las diferentes propiedades de un objeto Function.

let sumar = new Function('a', 'b', 'return a + b;');

console.log(typeof sumar);  // function
console.log(sumar.arguments); // a, b
console.log(sumar.name);    // anonymous
console.log(sumar.length);  // 2

console.log();

console.log(sumar.displayName); // undefined
sumar.displayName = 'Sumar';
console.log(sumar.displayName); // Sumar
