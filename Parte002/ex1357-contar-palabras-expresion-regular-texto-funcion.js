// Ejercicio 1357: Contar el número de palabras que tiene una cadena de caracteres con una regex.

function contarPalabrasFrase(frase) {
    frase = frase.replace(/^\s*|\s*$/gi, '');
    frase = frase.replace(/[ ]{2,}/gi, ' ');
    frase = frase.replace(/\n /, '\n');

    return frase.split(' ').length;
}

let texto = '               JavaScript    es                tremendo             ';
console.log(texto);
console.log(texto.length);

console.log();

let resultado = contarPalabrasFrase(texto);
console.log(resultado); // 3
