// Ejercicio 1335: Buscar la cantidad existente de una palabra en una cadena de caracteres.

function buscarCantidadCoincidencias(texto, palabra) {
    let contador = 0;
    let palabras = texto.split(' ');

    for (const p of palabras) {
        if (p == palaqbra) {
            ++contador;
        }
    }

    return contador;
}

let frase = 'JavaScript es tremendo. JavaScript es un lenguaje de programación. JavaScript permite la creación de aplicaciones Web.';

let resultado = buscarCantidadCoincidencias(frase, 'JavaScript');
console.log(resultado);     // 3

console.log();

resultado = buscarCantidadCoincidencias(frase, 'lenguaje');
console.log(resultado);     // 1
