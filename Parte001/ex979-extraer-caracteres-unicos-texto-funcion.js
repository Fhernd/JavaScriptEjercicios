// Ejercicio 979: Definir una función para extraer los caracteres únicos de una cadena de caracteres.

function extraerCaracteresUnicos(texto) {
    if (typeof texto != 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    let caracteresUnicos = '';

    for(let i = 0; i < texto.length; ++i) {
        if (caracteresUnicos.indexOf(texto.charAt(i)) == -1) {
            caracteresUnicos += texto[i];
        }
    }

    return caracteresUnicos;
}

try {
    console.log(extraerCaracteresUnicos('JavaScript')); // JavScript
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(extraerCaracteresUnicos('Programación')); // Progamción
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(extraerCaracteresUnicos(42)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
