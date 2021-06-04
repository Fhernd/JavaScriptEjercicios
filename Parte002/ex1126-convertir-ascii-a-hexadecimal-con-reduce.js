// Ejercicio 1126: Usar la función reduce() para convertir un texto ASCII a hexadecimal.

function asciiAHexadecimal(texto) {
    if (texto.constructor != String) {
        return null;
    }

    return texto.split('').reduce((a, v) => a.concat(Number(v.charCodeAt(0)).toString(16)), '');
}

console.log(asciiAHexadecimal('JavaScript'));
console.log(asciiAHexadecimal('Python'));
console.log(asciiAHexadecimal('C++'));
console.log(asciiAHexadecimal('Go'));
