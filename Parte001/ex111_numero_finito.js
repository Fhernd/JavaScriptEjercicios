// Ejercicio 111: Validar si un número es finito.

let numero = 1;

console.log(isFinite(numero));
console.log(Number.isFinite(numero));

console.log();

numero = 1/0;
console.log(numero);
console.log(isFinite(numero));
console.log(Number.isFinite(numero));

console.log();

console.log(isFinite(NaN));
console.log(isFinite(null));
console.log(isFinite(undefined));
