// Ejercicio 31: Realizar validaciones para NaN e infinto.

let x = NaN;
let y = -Infinity;
let z = Infinity;
let w = 5;

console.log(Number.isNaN(x));
console.log(Number.isFinite(y));
console.log(Number.isFinite(z));
console.log(Number.isNaN(w));
console.log(Number.isFinite(w));
