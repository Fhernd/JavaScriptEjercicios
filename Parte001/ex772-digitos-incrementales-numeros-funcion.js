// Ejercicio 772: Definir una función para validar si los dígitos de un número se hallan en un orden incremental.

// 3579 => 3, 5, 7, 9 => true
// 1937 => 1, 9, 3, 7 => false

function digitosEnOrdenIncremental(numero) {
    if (typeof numero === 'number' && Number.isInteger(numero)) {
        if (numero > 0) {
            let digitos = String(numero).split('').map(c => parseInt(c));

            for(let i = 0; i < digitos.length - 1; ++i) {
                if (digitos[i] > digitos[i + 1]) {
                    return false;
                }
            }

            return true;
        } else {
            throw Error('El número debe ser mayor a 0.');
        }
    } else {
        throw TypeError('El argumento debe ser un número.')
    }
}

try {
    console.log(digitosEnOrdenIncremental(3579));   // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(digitosEnOrdenIncremental(1937));   // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(digitosEnOrdenIncremental('cuatro'));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(digitosEnOrdenIncremental(-1000));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
