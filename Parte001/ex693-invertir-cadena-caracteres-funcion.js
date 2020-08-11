// Ejercicio 693: Crear una función personalizada para invertir una cadena de caracteres.

// JavaScript => tpircSavaJ

function invertirCadena(texto) {
    let resultado = '';

    for(let i = texto.length - 1; i >= 0; --i) {
        resultado += texto[i];
    }

    return resultado;
}

console.log(invertirCadena('JavaScript'));  // tpircSavaJ
console.log(invertirCadena('Python'));  // nohtyP
console.log(invertirCadena('PHP'));  // PHP
console.log(invertirCadena('oso'));  // oso
console.log(invertirCadena('1001'));  // 1001
console.log(invertirCadena('12345'));  // 54321
