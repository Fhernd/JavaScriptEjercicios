// Ejercicio 1313: Parametrizar una cadena de caracteres por medio de una expresión regular.

function parametrizarCadenaCaracteres(texto) {
    return texto.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, '').replace(/\s/g, '|');
}

let frase = '           JavaScript es tremendo.     ';
console.log(frase);
console.log(frase.length);

console.log();

let resultado = parametrizarCadenaCaracteres(frase);
console.log(resultado); // javascript-es-tremendo
console.log(resultado.length);
