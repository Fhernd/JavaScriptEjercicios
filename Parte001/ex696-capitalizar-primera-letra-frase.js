// Ejercicio 696: Crear una función personalizada para capitalizar cada palabra en una frase.

// JavaScript es un lenguaje de programación
// JavaScript Es Un Lenguaje De Programación

function capitalizarPrimeraLetra(frase) {
    frase = frase.split(' ');

    for(let i = 0; i < frase.length; ++i) {
        frase[i] = frase[i][0].toUpperCase() + frase[i].substring(1);
    }

    return frase.join(' ');
}

console.log(capitalizarPrimeraLetra('JavaScript es un lenguaje de programación'));
console.log(capitalizarPrimeraLetra('JavaScript y python'));
