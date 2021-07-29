// Ejercicio 1202: Usar el operador delete para eliminar* un elemento de un arreglo.

let lenguajes = ['Python', 'JavaScript', 'Go', 'C++'];
console.log(lenguajes);
console.log(lenguajes.length);  // 4

console.log();

delete lenguajes[2];
console.log(lenguajes);
console.log(lenguajes.length);  // 4
