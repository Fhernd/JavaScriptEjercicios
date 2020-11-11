// Ejercicio 908: Crear una función para generar el hash de un texto como un número entero.

function generarHashTexto(texto) {
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
    console.log(generarHashTexto('JavaScript'));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(generarHashTexto('C++'));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(generarHashTexto('Python'));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(generarHashTexto('Colombia'));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(generarHashTexto(100)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(generarHashTexto('')); // null
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(generarHashTexto(``)); // null
} catch (e) {
    console.log(`Error: ${e.message}`);
}
