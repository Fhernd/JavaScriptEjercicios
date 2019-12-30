// Ejercicio 217: Eliminar todos los elementos de un conjunto con clear().

let numeros = new Set();

numeros.add(2);
numeros.add(3);
numeros.add(5);
numeros.add(7);
numeros.add(11);

console.log(numeros);
console.log(numeros.size);

console.log();

numeros.clear();
console.log(numeros);
console.log(numeros.size);
