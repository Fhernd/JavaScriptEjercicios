// Ejercicio 321: Extraer una lista de elementos a partir de una cadena de caracteres.

let frase = 'Lenguajes de programación. Los más populares son: JavaScript, Python, Java, C++.';

let inicio = frase.indexOf(':');
let fin = frase.indexOf('.', inicio);

let listadoCadena = frase.substring(inicio + 1, fin);

console.log(inicio);
console.log(fin);
console.log(listadoCadena);

console.log();

let lenguajes = listadoCadena.split(',');
console.log(lenguajes.length);
console.log(lenguajes);
