// Ejercicio 793: Verificar si un texto termina con un número de tres dígitos usando una expresión regular.

function terminaConTresDigitos(texto) {
    if (typeof texto !== 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres (texto)');
    }

    let patron = /\d{3}$/i;

    return patron.test(texto);
}

try {
    console.log(terminaConTresDigitos('Número 123'));   // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(terminaConTresDigitos('Número 12 3'));   // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(terminaConTresDigitos(new Array(10)));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
