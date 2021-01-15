// Ejercicio 941: Crear una función personalizada para separar por millares los dígitos de un número.

function separadorMillares(numero) {
    if (typeof numero != 'number') {
        throw TypeError('El argumento debe ser un valor numérico.');
    }

    return numero.toLocaleString('en-US');
}

try {
    console.log(separadorMillares(123456789.12345));    // 123,456,789.12345
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(separadorMillares(123.4567));    // 123.4567
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(separadorMillares("123.4567"));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(separadorMillares(-1239.4567));    // -1,239.4567
} catch (e) {
    console.log(`Error: ${e.message}`);
}
