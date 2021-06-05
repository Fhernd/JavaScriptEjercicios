// Ejercicio 1132: Remover los caracteres no alfabéticos de un texto a través de una función.

// JavaScript ~!@#$%^&*()+`-={}[]|\\:";\'/?><., es tremendo \:";\'/?><
// JavaScript es tremendo

function removerCaracteresNoAlfabeticos(texto) {
    if (texto.constructor != String) {
        return null;
    }

    let patron = /[^\x20\x2D0-9A-Z\x5Fa-z\xC0-\xD6\xD8-\xF6\xF8-\xFF]/g;

    return texto.replace(patron, '');
}

let texto = 'JavaScript ~!@#$%^&*()+`-={}[]|\\:";\'/?><., es tremendo \:";\'/?><';

console.log(removerCaracteresNoAlfabeticos(texto)); // JavaScript es tremendo

console.log();

console.log(removerCaracteresNoAlfabeticos(42));    // null
