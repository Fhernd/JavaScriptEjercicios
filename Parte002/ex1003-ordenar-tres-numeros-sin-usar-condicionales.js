// Ejercicio 1003: Ordenar tres números de forma ascendente sin usar condicionales ni ciclos.

let a = 3;
let b = 2;
let c = 1;

let x = Math.min(a, b, c);
let y = Math.max(a, b, c);
let z = (a + b + c) - x - y;

// x = 1
// y = 3
// z = (6) - 1 - 3
// z = 2

console.log(x, z, y);
