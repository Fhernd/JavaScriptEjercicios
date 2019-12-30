// Ejercicio 190: Encontrar los elementos únicos de un arreglo con la función filter.

let numeros = [1, 2, 2, 3, 3, 4, 5, 5, 6, 6, 6, 7, 8];

console.log(numeros);

let numerosUnicos = numeros.filter((valor, indice, arreglo) => {
    return arreglo.indexOf(valor) == indice;
});

// valor: 1, 2, 2, 3, 3, ...
// indice: 0, 1, 2, 3, 4, ...
// indexOf: 0, 1, 1, 3, 3, ...
// [1, 2, 3, 4, 5, 6, 7, 8]

console.log(numerosUnicos);
