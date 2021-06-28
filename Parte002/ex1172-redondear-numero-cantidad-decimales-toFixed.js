// Ejercicio 1172: Redondear un número hasta cierta cantidad de decimales con toFixed().

let pi = Math.PI;
console.log(pi);

console.log();

let resultado = pi.toFixed(3);
console.log(resultado);
console.log(typeof resultado);

console.log();

resultado = parseFloat(pi.toFixed(3));
console.log(resultado);
console.log(typeof resultado);

console.log();

resultado = parseFloat(pi.toFixed(5));
console.log(resultado);
console.log(typeof resultado);

console.log();

resultado = parseFloat(pi.toFixed(7));
console.log(resultado);
console.log(typeof resultado);
