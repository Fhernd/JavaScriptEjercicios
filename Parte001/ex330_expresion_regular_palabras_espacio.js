// Ejercicio 330: Determinar si dos palabras están separadas por n cantidad de espacio.

let frase = 'Python 3.8.0';

let patron = /\w+\s+[0-9\.]+/g;

let resultado = frase.match(patron);

console.log(resultado);
