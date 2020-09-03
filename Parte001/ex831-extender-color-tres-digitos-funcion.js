// Ejercicio 831: Crear una función para extender un color de tres dígitos a uno de 6 dígitos.

// #fff => ['f', 'f', 'f']
// fff

function extenderDigitosColorHex(colorHex) {
    if (typeof colorHex !== 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    if (colorHex.length !== 3 && colorHex.length !== 4) {
        return null;
    }

    let resultado = colorHex.slice(colorHex.startsWith('#') ? 1 : 0)
                            .split('')
                            .map(c => c + c)
                            .join('');
    
    return `#${resultado}`;
}

try {
    console.log(extenderDigitosColorHex('#fff'));   // #ffffff
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(extenderDigitosColorHex(new Object()));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(extenderDigitosColorHex('#ff00ff'));   // null
} catch (e) {
    console.log(`Error: ${e.message}`);
}
