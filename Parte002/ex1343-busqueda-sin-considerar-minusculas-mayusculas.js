// Ejerciocio 1343: Buscar un texto sobre una cadena sin considerar minúsculas o mayúsculas.

function buscarTexto(contenido, texto) {
    return contenido.search(new RegExp(texto, 'i')) > 0;
}

let frase = 'JavaScript es un lenguaje de programación.';

console.log(buscarTexto(frase, 'LENGUAJE'));    // true
console.log(buscarTexto(frase, 'lenguaje'));    // true
console.log(buscarTexto(frase, 'Lenguaje'));    // true
console.log(buscarTexto(frase, 'LENGUJAE'));    // false
console.log(buscarTexto(frase, 'C#'));    // false
