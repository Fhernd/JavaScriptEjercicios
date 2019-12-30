// Ejercicio 147: Eliminar un elemento de un arreglo con el método pop.

// Solución:

let numeros = [1, 2, 3, 4, 5];

console.log(numeros.length);
console.log(numeros);

console.log();

let numeroEliminado = numeros.pop();

console.log('Número eliminado:', numeroEliminado);
console.log('Cantidad de elementos del arreglo:', numeros.length);
console.log(numeros);

numeros.pop();
numeros.pop();
numeros.pop();

console.log();

console.log(numeros);

numeros.pop();

console.log(numeros);

console.log(numeros.pop());

console.log(numeros);
