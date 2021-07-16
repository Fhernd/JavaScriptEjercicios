// Ejercicio 1191: Definir una función para contar los dígitos decimales de un número real.

// 123.4567
// => 4

function contarDigitosEntero(numero) {
    if (typeof numero != 'number' || !Number.isInteger(numero)) {
        throw TypeError('Debe pasar como argumento un número entero.');
    }

    let contador = 0;

    while (numero >= 1) {
        ++contador;
        numero /= 10;
    }

    return contador;
}

function contarDigitosDecimales(numero) {
    if (typeof numero != 'number') {
        return null;
    }

    numero = +String(numero).split('.')[1];

    return contarDigitosEntero(numero);
}

console.log(contarDigitosDecimales(123.4567));  // 4
console.log(contarDigitosDecimales(123.45));  // 2
console.log(contarDigitosDecimales(123.453));  // 3
console.log(contarDigitosDecimales(123.4));  // 1
