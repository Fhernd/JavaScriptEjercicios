// Ejercicio 1049: Generar arreglo con valores únicos a partir de dos arreglos.

let primos = [2, 3, 5, 7, 7, 11, 13, 13, 2, 5];
console.log(primos);
console.log(primos.length);

console.log();

let numeros = [10, 2, 5, 3, 100, 20, 15, 19];
console.log(numeros);
console.log(numeros.length);

console.log();

let resultado = new Set([...primos, ...numeros]);
console.log(resultado);
console.log(resultado.size);

resultado = [...resultado];
console.log(resultado);
console.log(resultado.length);
