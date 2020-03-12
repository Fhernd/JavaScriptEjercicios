// Ejercicio 528: Creación de un conjunto en ECMAScript 6 con la clase Set.

let numeros = new Set();
numeros.add(2);
numeros.add(3);
numeros.add(5);

console.log('Contenido del conjunto `numeros`:', numeros);
console.log('Cantidad de elementos del conjunto `numeros`:', numeros.size);

numeros.add(7);
numeros.add(11);
numeros.add(5);
numeros.add(2);

console.log('Contenido del conjunto `numeros`:', numeros);
console.log('Cantidad de elementos del conjunto `numeros`:', numeros.size);

console.log();

let primos = new Set([2, 3, 5, 7, 7, 7, 5, 11, 13]);

console.log('Contenido del conjunto `primos`:', primos);
console.log('Cantidad de elementos del conjunto `primos`:', primos.size);
