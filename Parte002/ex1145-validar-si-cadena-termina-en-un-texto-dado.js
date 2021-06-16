// Ejercicio 1145: Validar si una cadena de caracteres termina en un texto específico.

// JavaScript es un lenguaje de programación
// programación
// true
// false

function terminaEn(texto, subcadena) {
    if (texto.constructor != String || subcadena.constructor != String) {
        throw TypeError('Ambos argumentos deben ser de tipo cadena de caracteres.');
    }

    let diferencia = texto.length - subcadena.length;

    return diferencia >= 0 && texto.indexOf(subcadena, diferencia) > -1;
}

try {
    console.log(terminaEn('JavaScript es un lenguaje de programación', 'programación'));    // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(terminaEn('JavaScript es un lenguaje de programación', 'programacion'));    // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(terminaEn(42, 'programacion'));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
