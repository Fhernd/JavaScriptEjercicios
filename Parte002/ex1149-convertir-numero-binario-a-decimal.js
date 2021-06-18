// Ejercicio 1149: Usar una función para convertir un número binario en un número decimal.

function convertirBinarioADecimal(binario) {
    if (binario.constructor != String) {
        return null;
    }

    binario = binario.replace(/[^01]/gi, '');

    return Number.parseInt(binario, 2);
}

console.log(convertirBinarioADecimal('1001'));  // 9
console.log(convertirBinarioADecimal('1111'));  // 15
console.log(convertirBinarioADecimal('10000'));  // 16
console.log(convertirBinarioADecimal('11111'));  // 31

console.log();

console.log(convertirBinarioADecimal(1001));    // null