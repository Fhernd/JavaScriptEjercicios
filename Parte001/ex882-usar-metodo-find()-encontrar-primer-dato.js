// Ejercicio 882: Usar la función find() para encontrar el primer elemento que cumpla una condición en un arreglo.

let primos = [7, 5, 11, 3, 2, 19, 17, 23];
console.log(primos);

console.log();

let resultado = primos.find(n => n % 2 == 0);
console.log(resultado); // 2

console.log();

resultado = primos.find(n => n > 15);
console.log(resultado);
