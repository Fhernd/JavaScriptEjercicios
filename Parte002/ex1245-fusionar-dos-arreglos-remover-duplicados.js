// Ejercicio 1245: Fusionar dos arreglos y remover los duplicados.

// [1, 2, 3, 4]
// [2, 3, 5, 7]
// => [1, 2, 3, 4, 5, 7]

let numeros1 = [1, 2, 3, 4];
let numeros2 = [2, 3, 5, 7];

let resultado = [...new Set([...numeros1, ...numeros2])];
console.log(resultado); // [1, 2, 3, 4, 5, 7]
console.log(resultado.length);  // 6
