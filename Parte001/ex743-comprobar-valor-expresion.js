// Ejercicio 743: Verificar cuál operación aritmética es válida para dos operandos y un resultado.

// a OPERADOR b = c

function verificarOperacionAritmetica(a, b, resultado) {
    if (typeof a === 'number' && typeof b === 'number' && typeof resultado === 'number') {
        return a + b === resultado || a - b === resultado || a * b === resultado || a / b === resultado;
    } else {
        throw TypeError('Todos los argumentos deben ser números.')
    }
}

try {
    console.log(verificarOperacionAritmetica(2, 3, 5)); // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(verificarOperacionAritmetica(1, 2, 0.5)); // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(verificarOperacionAritmetica(7, 13, 91)); // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(verificarOperacionAritmetica(7, 13, -6)); // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(verificarOperacionAritmetica(7, 13, 6)); // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(verificarOperacionAritmetica('7', 13, 6)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
