// Ejercicio 214: Crear un conjunto usando la clase Set.

let numeros = new Set();

console.log(typeof numeros);
console.log(numeros instanceof Set);

numeros.add(1);
numeros.add(2);
numeros.add(2);
numeros.add(3);
numeros.add(4);
numeros.add(4);
numeros.add(4);
numeros.add(4);
numeros.add(5);

console.log(numeros.size);

console.log(numeros);
