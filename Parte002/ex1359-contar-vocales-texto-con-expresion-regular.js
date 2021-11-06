// Ejercicio 1359: Contar el número de vocales de un texto con una expresión regular.

function contarVocales(texto) {
    return texto.match(/[aeiouáéíóú]/gi).length;
}

console.log(contarVocales('JavaScript'));   // 3
console.log(contarVocales('programación'));   // 5
console.log(contarVocales('JAVASCRIPT'));   // 3
