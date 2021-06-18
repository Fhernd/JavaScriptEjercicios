// Ejercicio 1151: Usar una función para convertir un número hexadecimal en un número decimal.

function convertirHexADec(hexadecimal) {
    if (hexadecimal.constructor != String) {
        return null;
    }

    // 0-9, A-F
    hexadecimal = hexadecimal.replace(/[^0-9A-Fa-f]/gi, '');

    return Number.parseInt(hexadecimal, 16);
}

console.log(convertirHexADec('F')); // 15
console.log(convertirHexADec('FF')); // 255
console.log(convertirHexADec('A')); // 10
console.log(convertirHexADec('B')); // 11

console.log();

console.log(convertirHexADec(42));  // null
