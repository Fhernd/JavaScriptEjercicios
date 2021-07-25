// Ejercicio 1199: Usar la función reduce() para calcular el producto de un arreglo de números.

// [2, 3, 5, 7] => 210

let numeros = [2, 3, 5, 7];

let producto = numeros.reduce((a, n) => (a *= n, a), 1);

console.log(producto);  // 210

console.log();

numeros.push(11)
producto = numeros.reduce((a, n) => (a *= n, a), 1);
console.log(producto);  // 2310
