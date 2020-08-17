// Ejercicio 741: Comprobar que dos números sean divisibles por un número específico.

function numerosDivisibles(a, b, divisor) {
    if (typeof a === 'number' && typeof b === 'number' && typeof divisor === 'number') {
        if (Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(divisor)) {
            return a % divisor === 0 && b % divisor === 0;
        } else {
            throw TypeError('Los tres argumentos deben ser números enteros.');
        }
    } else {
        throw TypeError('Los tres argumentos deben ser números.');
    }
}

try {
    console.log(numerosDivisibles(12, 3, 1));   // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(numerosDivisibles(12, 24, 4));   // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(numerosDivisibles(12, 24, 8));   // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(numerosDivisibles('12', 24, 8));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(numerosDivisibles(12.2, 24, 8));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
