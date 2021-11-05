// Ejercicio 1338: Remover caracteres no legibles de un texto usando una expresión regular.

// JavaScript ~!@#$%^&*()+`-={}[]|\\:";\'/?><., Web

function removerCaracteresNoLegibles(texto) {
    const PATRON = /[^\x20\x2D0-9A-Z\x5Fa-z\xC0-\xD6\xD8-\xF6\xF8-\xFF]/g;

    return texto.replace(PATRON, '');
}

let contenido = 'JavaScript ~!@#$%^&*()+`-={}[]|\\:";\'/?><., Web';
console.log(contenido);
console.log(contenido.length);

console.log();

let resultado = removerCaracteresNoLegibles(contenido);
console.log(resultado);
console.log(resultado.length);
