// Ejercicio 1315: Capitalizar cada palabra de una frase usando una función a la medida.

function capitalizarPalabras(frase) {
    return frase.replace(/\w\S*/g, function(e) {
        return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
    });
}

let frase = 'JAVASCRIPT ES TREMENDO';
console.log(frase);

console.log();

console.log(capitalizarPalabras(frase));    // Javascript Es Tremendo
