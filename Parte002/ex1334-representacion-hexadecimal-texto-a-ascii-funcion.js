// Ejercicio 1334: Obtener la representación en ASCII de un texto en hexadecimal.

function hexadecimalAAscii(texto) {
    let hexadecimal = texto.toString();

    let resultado = '';

    for(let i = 0; i < hexadecimal.length; i += 2) {
        resultado += String.fromCharCode(parseInt(hexadecimal.substr(i, 2), 16));
    }

    return resultado;
}

console.log(hexadecimalAAscii('323335'));   // 235
