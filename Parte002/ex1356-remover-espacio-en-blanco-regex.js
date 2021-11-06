// Ejercicio 1356: Usar una expresión regular para remover el espacio en blanco al inicio y al final de un texto.

// trim()

function trim(texto) {
    return texto.replace(/^\s+|\s+$/g, '');
}

let texto = '                         JavaScript                  ';
console.log(texto);
console.log(texto.length);

console.log();

let resultado = trim(texto);
console.log(resultado);
console.log(resultado.length);
