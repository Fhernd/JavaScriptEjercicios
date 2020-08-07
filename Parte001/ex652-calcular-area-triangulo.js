// Ejercicio 652: Calcular el área de un triángulo utilizando la fórmula de Herón.

let a = 7;
let b = 8;
let c = 6;

let s = (a + b + c) / 2.0;

let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

console.log(`El área del triángulo: ${area}`);
