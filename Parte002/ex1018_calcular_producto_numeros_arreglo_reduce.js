// Ejercicio 1018: Calcular el producto de varios números de un arreglo con la función reduce().

let numeros = [2, 3, 5, 7];

// 210

let resultado = numeros.reduce((a, n) => (a *= n, a), 1);
console.log(resultado); // 210

console.log();

numeros = [1, 2, 3, 4, 5];

// 5! = 120
resultado = numeros.reduce((a, n) => (a *= n, a), 1);
console.log(resultado); // 120
