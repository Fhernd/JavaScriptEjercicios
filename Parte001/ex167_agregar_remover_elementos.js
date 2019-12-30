// Ejercicio 167: Agregar o remover elementos de un arreglo con splice.

let lenguajes = ['Java', 'C++', 'Python'];

console.log(lenguajes);

lenguajes.splice(2, 0, 'JavaScript');

console.log(lenguajes);

lenguajes.splice(1, 0, 'C#');

console.log(lenguajes);

console.log();

lenguajes.splice(3, 2);

console.log(lenguajes);
