// Ejercicio 1322: Truncar una cadena de caracteres hasta cierto límite de caracteres.

// JavaScript es tremendo
// JavaScript es...

function truncarTexto(frase, longitud, truncamiento='...') {
    return frase.length > longitud ? frase.slice(0, longitud) + truncamiento : frase;
}

let frase = 'JavaScript es tremendo';
console.log(truncarTexto(frase, 13));
console.log(truncarTexto(frase, 4));
