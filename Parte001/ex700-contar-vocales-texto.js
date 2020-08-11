// Ejercicio 700: Crear una función personalizada para contar el número de vocales de una cadena.

function contarVocales(texto) {
    let contadorVocales = 0;
    let vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    for(let i = 0; i < texto.length; ++i) {
        if (vocales.indexOf(texto[i]) >= 0) {
            ++contadorVocales;
        }
    }

    return contadorVocales;
}

console.log(contarVocales('JavaScript'));   // 3
console.log(contarVocales('Perl'));   // 1
console.log(contarVocales('MICROSOFT'));   // 3
console.log(contarVocales('APPLE'));   // 2
console.log(contarVocales('Visual Studio Code'));   // 8
console.log(contarVocales('Eclipse'));   // 3
console.log(contarVocales('Python'));   // 1
console.log(contarVocales('Acción'));   // 2
