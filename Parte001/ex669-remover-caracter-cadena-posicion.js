// Ejercicio 669: Remover un carácter en una posición específica desde una cadena de caracteres.

function removerCaracter(texto, posicionCaracter) {
    if (texto.length) {
        if (posicionCaracter >= 0 && posicionCaracter < texto.length) {
            let parte1 = texto.substring(0, posicionCaracter);
            let parte2 = texto.substring(posicionCaracter + 1, texto.length);

            return parte1 + parte2;
        } else {
            return texto;
        }
    } else {
        return texto;
    }
}

let texto = 'JavaSccript'
console.log(removerCaracter(texto, 5)); // JavaScript

console.log();

texto = ''
console.log(removerCaracter(texto, 5)); //

console.log();

texto = 'Python'
console.log(removerCaracter(texto, 10));    // Python
