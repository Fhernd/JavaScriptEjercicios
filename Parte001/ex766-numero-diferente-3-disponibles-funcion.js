// Ejercicio 766: Crear una función para encontrar el número diferente de tres números dados.

// 1, 1, 3 => 3
// 1, 1, 1 => null
// 1, 2, 3 => null

function encontrarNumeroDiferente(a, b, c) {
    if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
        if (a == b && a == c) {
            return null;
        }

        if (a != b && a != c && b != c) {
            return null;
        }

        if (a == b) {
            return c;
        } else if (b == c) {
            return a;
        } else {
            return b;
        }
    } else {
        throw TypeError('Los tres argumentos deben ser números.');
    }
}

try {
    console.log(encontrarNumeroDiferente(1, 1, 3)); // 3
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(encontrarNumeroDiferente(1, 2, 2)); // 3
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(encontrarNumeroDiferente(3, 2, 3)); // 2
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(encontrarNumeroDiferente(3, 3, 3)); // null
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(encontrarNumeroDiferente(1, 2, 3)); // null
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(encontrarNumeroDiferente('1', 2, 3)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
