// Ejercicio 157: Acceder a los elementos de una matriz (arreglo bidimensional).

// Solución:

let matriz = new Array();
matriz.push([1, 2, 3]);
matriz.push([4, 5, 6]);
matriz.push([7, 8, 7]);

console.log(matriz.length);
console.log(matriz);
console.log(typeof matriz);
console.log(matriz instanceof Array);

console.log();

// Obtener toda una fila:
console.log(matriz[0]);
console.log(matriz[1]);
console.log(matriz[2]);

console.log();

// Obtener un elemento (valor) de la matriz:
console.log(matriz[0][0]);
console.log(matriz[2][2]);
