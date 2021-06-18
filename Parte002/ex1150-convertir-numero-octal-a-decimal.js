// Ejercicio 1150: Usar una función para convertir un número octal en un número decimal.

function convertirOctalADecimal(octal) {
    if (octal.constructor != String) {
        return null;
    }

    octal = octal.replace(/[^0-7]/gi, '');

    return parseInt(octal, 8);
}

console.log(convertirOctalADecimal('11'));  // 9
console.log(convertirOctalADecimal('13'));  // 11
console.log(convertirOctalADecimal('20'));  // 16

console.log();

console.log(convertirOctalADecimal(42));    // null
