// Ejercicio 1212: Usar la función map() para clonar el contenido entero de un arreglo.

let lenguajes = ['JavaScript', 'TypeScript', 'Java', 'Go', 'Kotlin'];
console.log(lenguajes);
console.log(lenguajes.length);

console.log();

let copiaLenguajes = lenguajes.map((l) => l);
console.log(copiaLenguajes);
console.log(copiaLenguajes.length);
