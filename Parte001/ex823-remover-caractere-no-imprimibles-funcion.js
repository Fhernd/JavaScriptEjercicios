// Ejercicio 823: Crear una función para la remoción de caracteres que no sean ASCII.

// programación => programacin

function removerCaracteresNoAscii(texto) {
    if (typeof texto !== 'string') {
        throw TypeError('El argumento «texto» debe ser una cadena de caracteres.');
    }

    return texto.replace(/[^\x20-\x7E]/g, '');
}

console.log(removerCaracteresNoAscii('programación'));  // programacin

console.log(removerCaracteresNoAscii('pingüino'));  // pingino
