// Ejercicio 883: Usar la función findIndex() para encontrar el primer índice de un dato en un arreglo.

// findIndex(callback(valor, [, indice [, arreglo]]))

let primos = [7, 5, 11, 3, 2, 19, 17, 23];
console.log(primos);

console.log();

let resultado = primos.findIndex((p) => p % 2 == 0);
console.log(resultado);
console.log(primos[resultado]);

console.log();

resultado = primos.findIndex((p) => p > 15);
console.log(resultado);
console.log(primos[resultado]);

console.log();

resultado = primos.findIndex((p) => p > 15 && p % 2 == 0);
console.log(resultado);
