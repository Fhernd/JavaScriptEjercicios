// Ejercicio 914: Iterar los elementos de datos de un arreglo con un ciclo for...of.

let numeros = [2, 3, 5, 7, 11, 13, 17, 19];

let suma = 0;

for (const n of numeros) {
    suma += n;
}

console.log(`La suma del contenido del arreglo «numeros» es igual a ${suma}.`);

console.log();

let lenguaje = 'Python';
let caracteres = [];

for (const c of lenguaje) {
    caracteres.push(c);
}

console.log(caracteres);
