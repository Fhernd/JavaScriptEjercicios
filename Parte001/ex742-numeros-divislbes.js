// Ejercicio 742: Comprobar si dos números son ambos o ninguno divisibles por un número específico.

function numerosDivisibles(a, b, divisor) {
    if (typeof a === 'number' && typeof b === 'number' && typeof divisor === 'number') {
        if (Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(divisor)) {
            return (a % divisor === 0 && b % divisor === 0) || (a % divisor !== 0 && b % divisor !== 0)
        } else {
            throw TypeError('Los tres argumentos deben ser números enteros.');
        }
    } else {
        throw TypeError('Los tres argumentos deben ser números.');
    }
}

try {
    console.log(numerosDivisibles(8, 4, 2));    // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(numerosDivisibles(3, 5, 2));    // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(numerosDivisibles(4, 5, 2));    // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(numerosDivisibles('4', 5, 2));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(numerosDivisibles(4.8, 5, 2));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
