// Ejercicio 361: Buscar un valor específico en un arreglo con indexOf() y lastIndexOf().

let lenguajes = ['JavaScript', 'PHP', 'C', 'Java', 'PHP', 'Python', 'C++', 'C#'];

console.log(lenguajes.indexOf('C'));
console.log(lenguajes.indexOf('c'));
console.log(lenguajes.indexOf('Python'));
console.log(lenguajes.indexOf('PHP', 2));

console.log();

console.log(lenguajes.lastIndexOf('PHP'));
console.log(lenguajes.lastIndexOf('PHP', 3));
