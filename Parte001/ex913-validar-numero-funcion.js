// Ejericicio 913: Crear una función para validar si una cadena de caracteres representa un número.

function validarNumero(texto) {
    if (typeof texto != 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    let resultado = parseFloat(texto);

    return !Number.isNaN(resultado) && Number.isFinite(resultado);
}

try {
    console.log(validarNumero('123'));  // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(validarNumero('123.456'));  // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(validarNumero('123A.456'));  // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(validarNumero('B123A.456'));  // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(validarNumero({}));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
