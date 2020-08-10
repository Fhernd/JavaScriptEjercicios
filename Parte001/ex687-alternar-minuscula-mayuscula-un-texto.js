// Ejercicio 687: Alternar entre minúsculas y mayúsculas una cadena de caracteres.

function alternarTexto(cadena) {
    let resultado = '';

    for(let i = 0; i < cadena.length; ++i) {
        if (i % 2 == 0) {
            resultado += cadena[i].toUpperCase();
        } else {
            resultado += cadena[i].toLowerCase();
        }
    }

    return resultado;
}

console.log(alternarTexto('JavaScript'));   // JaVaScRiPt
console.log(alternarTexto('PHP'));   // PhP
console.log(alternarTexto('Python'));   // PyThOn
