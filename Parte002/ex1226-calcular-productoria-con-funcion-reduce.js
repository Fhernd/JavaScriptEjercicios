// Ejercicio 1226: Usar la función reduce() para calcular la productoria de n números.

let numeros = [2, 3, 5, 7, 11];

let producto = numeros.reduce((a, v) => (a *= v, a), 1);

console.log(producto);  // 2310
