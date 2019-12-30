// Ejercicio 159: Eliminar una fila de una matriz (arreglo bidimensional) con pop o shift.

// Solución:

let numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(numeros.length);
console.log(numeros);

console.log();

console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);

console.log();

let fila1 = numeros.shift();

console.log(numeros.length);
console.log(numeros);
console.log();
console.log(fila1);

console.log();

let ultimaFila = numeros.pop();

console.log(numeros.length);
console.log(numeros);
console.log();
console.log(ultimaFila);
