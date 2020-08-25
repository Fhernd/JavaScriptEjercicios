// Ejercicio 791: Crear una función para reemplazar el primer dígito de un texto por el carácter $.

function reemplazarPrimerDigito(texto) {
    if (typeof texto === 'string') {
        return texto.replace(/[0-9]/, '$');
    } else {
        throw TypeError('El argumento debe ser una cadena de caracteres (texto).');
    }
}

try {
    console.log(reemplazarPrimerDigito('JavaScr1pt'));  // JavaScr$pt
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(reemplazarPrimerDigito('JavaScr1pt ES6'));  // JavaScr$pt ES6
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(reemplazarPrimerDigito(123456));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
