// Ejercicio 1135: Aplicar padding a un número y usar signo a la izquierda de la cadena resultante.

// 123
// padding = 5
// +
// => +00123

// => 00000 + 123 => 00000123

function aplicarPadding(numero, padding, signo=true) {
    if (typeof numero != 'number' || !Number.isInteger(numero)) {
        throw TypeError('El primer argumento debe ser un número entero.');
    }
    
    if (typeof padding != 'number' || !Number.isInteger(padding)) {
        throw TypeError('El segundo argumento debe ser un número entero.');
    }

    let ceros = new Array(padding + 1).join('0');

    return (signo ? (numero >= 0 ? '+' : '-') : '') + (ceros + numero).slice(-ceros.length);
}

try {
    console.log(aplicarPadding(123, 5));    // +00123
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(aplicarPadding(123, 5, false));    // 00123
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(aplicarPadding('123', 5, false));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
