// Ejercicio 1119: Agregar padding a la izquierda o a la derecha sobre un número a través de una función.

// 123
// 5
// 00123

function agregarPadding(numero, caracter='0', padding=10, posicion='i') {
    caracter = new Array(padding + 1).join(caracter);

    if (posicion == 'i') {
        return (caracter + numero).slice(-caracter.length);
    } else {
        return (numero + caracter).substring(0, caracter.length);
    }
}

console.log(agregarPadding(123));   // 0000000123
console.log(agregarPadding(123456));   // 0000123456
console.log(agregarPadding(1234567890));   // 1234567890

console.log();

console.log(agregarPadding(123, '0', 10, 'd'));   // 1230000000
console.log(agregarPadding(123456, '0', 10, 'd'));   // 1234560000
console.log(agregarPadding(1234567890, '0', 10, 'd'));   // 1234567890
