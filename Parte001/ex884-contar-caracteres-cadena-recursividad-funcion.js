// Ejercicio 884: Crear una función recursiva para contar el número de caracteres de una cadena.

function conteoRecursivo(texto) {
    return texto.length ? 1 + conteoRecursivo(texto.slice(1)) : 0;
}

function conteo(texto) {
    if (typeof texto != 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    return conteoRecursivo(texto);
}

try {
    console.log(conteo('JavaScript'));  // 10
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(conteo('Python'));  // 6
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(conteo(''));  // 0
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(conteo(100));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
