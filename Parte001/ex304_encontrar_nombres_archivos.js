// Ejercicio 304: Encontrar nombres de archivos en un texto con una expresión regular.

let frase = 'El nombre del archivo es karl_marx_biografia.pdf. El archivo se encuentra en la carpeta de documentos.';

let patron = /([a-z_]+\.pdf)/;

let resultado = patron.exec(frase);

console.log(resultado[0]);
