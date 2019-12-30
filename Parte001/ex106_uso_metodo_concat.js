// Ejercicio 106: Uso del método concat para concatenar texto.

var str1 = 'Hello';
var str2 = 'World';
var str3 = 'Welcome to JavaScript!';

console.log(str1.concat(' ', str2));
// expected output: "Hello World"

console.log(str2.concat(', ', str1));
// expected output: "World, Hello"

console.log(str1.concat(' ', str2, '. ', str3));
// expected output: "Hello World. Welcome to JavaScript!"
