// Ejercicio 891: Crear una función para reemplazar caracteres de un texto con una máscara.

// texto = ABCDEFGHIJ
// máscara = $
// n = 5
// resultado = $$$$$FGHIJ

function reemplazarCaracteresMascara(texto, n = 3, mascara = '$') {
    if (typeof texto != 'string') {
        throw TypeError('El argumento «texto» debe ser una cadena de caracteres.');
    }
    
    if (typeof n != 'number' || !Number.isInteger(n)) {
        throw TypeError('El argumento «texto» debe ser un número entero.');
    }

    if (typeof mascara != 'string') {
        throw TypeError('El argumento «mascara» debe ser una cadena de caracteres.');
    }

    return ('' + texto).slice(0, n).replace(/./g, mascara) + ('' + texto).slice(n);
}

try {
    console.log(reemplazarCaracteresMascara('ABCDEFGHIJ')); // $$$DEFGHIJ
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(reemplazarCaracteresMascara('ABCDEFGHIJ', 5)); // $$$$$FGHIJ
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(reemplazarCaracteresMascara('ABCDEFGHIJ', 5, '#')); // #####FGHIJ
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(reemplazarCaracteresMascara(100, 5, '#')); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(reemplazarCaracteresMascara('ABCDEFGHIJ', {}, '#')); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}


console.log();

try {
    console.log(reemplazarCaracteresMascara('ABCDEFGHIJ', 5, new Set())); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
