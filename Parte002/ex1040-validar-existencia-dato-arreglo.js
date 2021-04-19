// Ejercicio 1040: Validar si un dato existe en un arreglo con la función find().

let numeros = [2, 3, 5, 11, 13];
let lenguajes = ['Python', 'JavaScript', 'C++', 'Java', 'Kotlin'];

let numero = 5;
let resultado = numeros.find(n => n == numero);
console.log(resultado);

console.log();

numero = 7;
resultado = numeros.find(n => n == numero);
console.log(resultado); // undefined

console.log();

let lenguaje = 'C';
resultado = lenguajes.find(l => l == lenguaje);
console.log(resultado); // undefined

console.log();

lenguaje = 'kotlin';
resultado = lenguajes.find(l => l == lenguaje);
console.log(resultado); // undefined

console.log();

lenguaje = 'Kotlin';
resultado = lenguajes.find(l => l == lenguaje);
console.log(resultado); // Kotlin
