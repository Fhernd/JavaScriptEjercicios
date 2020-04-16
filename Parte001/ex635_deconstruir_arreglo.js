// Ejercicio 635: Usar la deconstrucción de un arreglo para intercambiar valores de variables.

let numeros = [1, 2, 3];

let [uno, , tres] = numeros;

console.log('Contenido de la variable `uno`:', uno);
console.log('Contenido de la variable `tres`:', tres);

console.log();

[uno, tres] = [tres, uno]

console.log('Contenido de la variable `uno`:', uno);
console.log('Contenido de la variable `tres`:', tres);
