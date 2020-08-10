// Ejercicio 683: Crear una función para dejar en minúscula los tres primeros caracteres de un texto.

function primeros3CaracteresMinuscula(texto) {
    if (texto.length >= 3) {
        let primeros3Caracteres = texto.substring(0, 3).toLowerCase();
        let caracteresRestantes = texto.length == 3 ? '' : texto.substring(3);

        return primeros3Caracteres + caracteresRestantes;
    } else {
        return texto;
    }
}

console.log(primeros3CaracteresMinuscula(''));
console.log(primeros3CaracteresMinuscula('PYTHON'));    // pytHON
console.log(primeros3CaracteresMinuscula('PHP'));    // php
