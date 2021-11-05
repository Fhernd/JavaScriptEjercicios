// Ejercicio 1332: Remover la primera ocurrencia de una subcadena desde un texto.

// JavaScript es tremendo. JavaScript sirve para crear aplicaciones Web.
// =>  es tremendo. JavaScript sirve para crear aplicaciones Web.

function removerPrimeraOcurrencia(texto, subtexto) {
    let indice = texto.indexOf(subtexto);

    if (indice == -1) {
        return texto;
    }

    return texto.slice(0, indice) + texto.slice(indice + subtexto.length);
}

let frase = 'JavaScript es tremendo. JavaScript sirve para crear aplicaciones Web.';
console.log(frase);
console.log(frase.length);

console.log();

let resultado = removerPrimeraOcurrencia(frase, 'JavaScript');
console.log(resultado);
console.log(resultado.length);
