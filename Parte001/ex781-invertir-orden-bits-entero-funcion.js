// Ejercicio 781: Definir una función para invertir el orden de los bits de un número entero.

// 7 -> 111 -> 111
// 8 -> 1000 -> 1
// 10 -> 1010 -> 101

function invertirBits(numero) {
    if (typeof numero === 'number' && Number.isInteger(numero)) {
        if (numero >= 0) {
            return parseInt(numero.toString(2).split('').reverse().join(''), 2);
        } else {
            throw Error('El número debe ser positivo.');
        }
    } else {
        throw TypeError('El argumento debe ser un número entero.');
    }
}

try {
    console.log(invertirBits(10));  // 101 (5)
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(invertirBits(7));  // 111 (7)
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(invertirBits(7.7));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(invertirBits(-7));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
