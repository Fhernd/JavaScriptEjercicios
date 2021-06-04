// Ejercicio 1127: Convertir una una cadena hexadecimal a una cadena en formato ASCII.

function convertirHexadecimalAAscii(hexadecimal) {
    if (hexadecimal.constructor != String) {
        return null;
    }

    let resultado = '';

    for (let i = 0; i < hexadecimal.length; i += 2) {
        resultado += String.fromCharCode(parseInt(hexadecimal.substr(i, 2), 16));
    }

    return resultado;
}

console.log(convertirHexadecimalAAscii('4a617661536372697074'));    // JavaScript
console.log(convertirHexadecimalAAscii('507974686f6e'));    // Python
console.log(convertirHexadecimalAAscii('432b2b'));  // C++
console.log(convertirHexadecimalAAscii('476f'));    // Go
