// Ejercicio 219: Agregar múltiples elementos a un conjunto con la función add().

let numeros = new Set();

numeros.add(1);
numeros.add(2);
numeros.add(3);
numeros.add(4);
numeros.add(5);

console.log(numeros);

console.log();

numeros.clear();

console.log(numeros);

numeros.add(1).add(2).add(3).add(4).add(5);

console.log();

console.log(numeros);
