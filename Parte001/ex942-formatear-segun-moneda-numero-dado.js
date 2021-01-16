// Ejercicio 942: Crear una función personalizada para formatear un número como moneda.

function convertirAMoneda(valor, moneda, formatoLenguaje = undefined) {
    if (typeof valor != 'number') {
        throw TypeError('El argumento «valor» debe ser un número.');
    }

    if (typeof moneda != 'string') {
        throw TypeError('El argumento «moneda» debe ser una cadena de caracteres.');
    }

    return Intl.NumberFormat(formatoLenguaje, {style: 'currency', currency: moneda}).format(valor);
}

try {
    console.log(convertirAMoneda(123456.654, 'EUR'));  // €123,456.654
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(convertirAMoneda(123456.654, 'USD'));  // $123,456.654
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(convertirAMoneda(123456.654, 'USD', 'en-us'));  // $123,456.654
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(convertirAMoneda(123456.654, 'USD', 'fa'));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(convertirAMoneda(123456.654, 'JPY')); // ¥123,456.654
} catch (e) {
    console.log(`Error: ${e.message}`);
}
