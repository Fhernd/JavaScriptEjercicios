// Ejercicio 701: Contar el número de vocales de una cadena con una expresión regular.

function contarVocales(texto) {
    return texto.replace(/[^aeiouAEIOU]/g, '').length;
}

console.log(contarVocales('JavaScript'));   // 3
console.log(contarVocales('Perl'));   // 1
console.log(contarVocales('MICROSOFT'));   // 3
console.log(contarVocales('APPLE'));   // 2
console.log(contarVocales('Visual Studio Code'));   // 8
console.log(contarVocales('Eclipse'));   // 3
console.log(contarVocales('Python'));   // 1
console.log(contarVocales('Acción'));   // 2
