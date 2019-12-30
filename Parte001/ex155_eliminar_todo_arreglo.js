// Ejercicio 155: Eliminar todo el contenido de un arreglo.

// Solución:

let lenguajes = ['JavaScript', 'C#', 'PHP', 'C++'];

console.log(lenguajes.length);
console.log(lenguajes);

console.log();

// Método 1:

lenguajes.length = 0;
console.log(lenguajes.length);
console.log(lenguajes);

console.log();

// Método 2:

lenguajes = ['JavaScript', 'C#', 'PHP', 'C++'];
console.log(lenguajes.length);
console.log(lenguajes);
lenguajes = [];
console.log(lenguajes.length);
console.log(lenguajes);
