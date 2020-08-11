// Ejercicio 694: Usar las funciones incorporadas para invertir una cadena de caracteres.

// Java => ['J', 'a', 'v', 'a'] => ['a', 'v', 'a', 'J'] => 'avaJ'


function invertirCadena(texto) {
    return texto.split('').reverse().join('');
}

console.log(invertirCadena('Java'));    // avaJ
console.log(invertirCadena('JavaScript'));    // tpircSavaJ
console.log(invertirCadena('Python'));    // nohtyP
console.log(invertirCadena('PHP'));    // PHP
console.log(invertirCadena('oso'));    // oso
console.log(invertirCadena('12345'));    // 54321
