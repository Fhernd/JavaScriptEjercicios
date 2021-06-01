// Ejercicio 1114: Particionar una cadena de caracteres en cantidades iguales a través de una función.

// Colombia
// longitud = 8
// n = 4
// => ['Colo', 'mbia']

// n = 2
// => ['Co', 'lo', 'mb', 'ia']

function particionarTexto(texto, n) {
    if (!texto.length) {
        return [];
    }

    return n > 0 ? texto.match(new RegExp('.{1,' + n + '}', 'g')) : [texto];
}

console.log(particionarTexto('Colombia', 2));   // ['Co', 'lo', 'mb', 'ia']

console.log();

console.log(particionarTexto('Colombia', 4));   // ['Colo', 'mbia']

console.log();

console.log(particionarTexto('Colombia', 6));   // ['Colomb', 'ia']

console.log();

console.log(particionarTexto('Colombia', 10));   // ['Colombia']
