// Ejercicio 959: Definir función para crear un hash como número entero de una cadena de caracteres.

function hashCadena(texto) {
    if (typeof texto != 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    if (!texto.length) {
        return null;
    }

    let caracteres = texto.split('');

    return caracteres.reduce((h, c) => (h = c.charCodeAt(0) + (h << 6) + (h << 16) - h), 0);
}

try {
    console.log(hashCadena('JavaScript'));  // -8837717171
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(hashCadena('Python'));  // 5659380188
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(hashCadena(1000));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(hashCadena(''));  // null
} catch (e) {
    console.log(`Error: ${e.message}`);
}
