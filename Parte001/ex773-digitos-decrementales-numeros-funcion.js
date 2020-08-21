// Ejercicio 773: Definir una función para validar si los dígitos de un número se hallan en un orden decremental.

// 9531 => 9, 5, 3, 1 => true
// 7383 => 7, 3, 8, 3 => false

function digitosEnOrdenDrecemental(numero) {
    if (typeof numero === 'number' && Number.isInteger(numero)) {
        if (numero > 0) {
            let digitos = String(numero).split('').map(c => parseInt(c));

            for(let i = 0; i < digitos.length - 1; ++i) {
                if (digitos[i] < digitos[i + 1]) {
                    return false;
                }
            }

            return true;
        } else {
            throw Error('El número debe ser mayor a 0.')
        }
    } else {
        throw TypeError('El argumento debe ser un número entero.');
    }
}

try {
    console.log(digitosEnOrdenDrecemental(9531));   // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(digitosEnOrdenDrecemental(7383));   // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(digitosEnOrdenDrecemental([7383]));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(digitosEnOrdenDrecemental(-1000));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
