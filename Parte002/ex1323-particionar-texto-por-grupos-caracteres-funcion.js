// Ejercicio 1323: Particionar un texto por grupos iguales de caracteres usando una función.

function particionarTextoPorGrupos(texto, tamagnio) {
    tamagnio = ~~tamagnio;

    return tamagnio > 0 ? texto.match(new RegExp('.{1,' + tamagnio + '}', 'g')) : [texto];
}

let texto = 'JavaScript';
console.log(particionarTextoPorGrupos(texto, 2));   // ['Ja', 'va', 'Sc', 'ri', 'pt']
console.log(particionarTextoPorGrupos(texto, 3));   // [ 'Jav', 'aSc', 'rip', 't' ]
console.log(particionarTextoPorGrupos(texto, 4));   // [ 'Jav', 'aSc', 'rip', 't' ]
