// Ejercicio 363: Aplanar un arreglo bidimensional con los métodos concat() y apply().

let matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];

// [1, 2, 3, 4, 5, 6, ..., 10, 11, 12]

let resultado1 = matriz[0].concat(matriz[1], matriz[2], matriz[3]);

console.log(resultado1.length);
console.log(resultado1);

console.log();

let resultado2 = matriz.concat.apply([], matriz);
console.log(resultado2.length);
console.log(resultado2);
