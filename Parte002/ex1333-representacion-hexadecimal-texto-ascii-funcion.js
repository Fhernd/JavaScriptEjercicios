// Ejercicio 1333: Obtener la representación hexadecimal de un texto en estándar ASCII.

function asciiAHexadecimal(texto) {
    let resultado = [];

    for(let i = 0; i < texto.length; ++i) {
        let hexadecimal = Number(texto.charCodeAt(i)).toString(16);

        resultado.push(hexadecimal);
    }

    return resultado.join('');
}

// 2 => 50
// 3 => 51
// 5 => 53

console.log(asciiAHexadecimal('235'));
