// Ejercicio 1213: Usar la función filter() para clonar el contenido entero de un arreglo.

let lenguajes = ['JavaScript', 'TypeScript', 'Java', 'Go', 'Kotlin'];
console.log(lenguajes);
console.log(lenguajes.length);

console.log();

let copiaLenguajes = lenguajes.filter(() => true);
console.log(copiaLenguajes);
console.log(copiaLenguajes.length);
