// Ejercicio 1248: Usar la propiedad length para vaciar/remover el contenido de un arreglo.

let primos = [2, 3, 5, 7, 11];

console.log(primos);    // [2, 3, 5, 7, 11]
console.log(primos.length); // 5

console.log();

primos.length = 0;  // primos = []
console.log(primos);    // []
console.log(primos.length); // 0
