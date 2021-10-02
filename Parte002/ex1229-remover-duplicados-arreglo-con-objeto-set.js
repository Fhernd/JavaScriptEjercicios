// Ejercicio 1229: Remover los duplicados de un arreglo con un objeto de tipo Set (conjunto).

let letras = ['a', 'b', 'a', 'a', 'e', 'b', 'c', 'a'];
console.log(letras);
console.log(letras.length); // 8

console.log();

let resultado = [...new Set(letras)];
console.log(resultado); // [a, b, e, c]
console.log(resultado.length);  // 4
