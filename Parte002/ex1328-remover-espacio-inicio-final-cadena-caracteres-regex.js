// Ejercicio 1328: Remover el espacio en blanco al inicio y al final de un texto con una expresión regular.

function removerEspacioInicioFinal(texto) {
    return texto.replace(/^\s+|\s+$/g, '');
}

let texto = '              OrtizOL                                ';
console.log(texto);
console.log(texto.length);

console.log();

let resultado = removerEspacioInicioFinal(texto);
console.log(resultado);
console.log(resultado.length);
