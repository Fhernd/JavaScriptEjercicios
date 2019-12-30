// Ejercicio 150: Eliminar varios elementos de un arreglo con la función splice.

// Solución:

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numeros.length);
console.log(numeros);

console.log();

let numerosEliminados = numeros.splice(3, 2);

console.log(numeros.length);
console.log('Números eliminados: ', numerosEliminados);
console.log(numeros);
