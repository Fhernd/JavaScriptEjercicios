// Ejercicio 151: Eliminar elementos de un arreglo por medio de un filtro.

// Solución:

let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let numerosImpares = numeros.filter((valor, indice, numeros) => {
    return valor % 2 == 1;
});

console.log(numeros);
console.log(numerosImpares);
