// Ejercicio 1126: Convertir una cadena de caracteres ASCII a su representación en hexadecimal.

function asciiAHexadecimal(texto) {
    if (texto.constructor != String) {
        return null;
    }

    let resultado = [];

    for (let i = 0; i < texto.length; i++) {
        resultado.push(Number(texto.charCodeAt(i)).toString(16));
    }

    return resultado.join('');
}

console.log(asciiAHexadecimal('JavaScript'));
console.log(asciiAHexadecimal('Python'));
console.log(asciiAHexadecimal('C++'));
console.log(asciiAHexadecimal('Go'));
