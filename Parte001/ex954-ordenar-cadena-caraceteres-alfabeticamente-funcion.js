// Ejercicio 954: Crear una función para ordenar una cadena de caracteres de forma alfabética.

function ordenarTexto(texto) {
    if (typeof texto != 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    return [...texto].sort((a, b) => a.localeCompare(b)).join('');
}

try {
    console.log(ordenarTexto('javascript')); // aacijprstv
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(ordenarTexto('python')); // hnopty
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(ordenarTexto(1000)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(ordenarTexto('python3')); // 3hnopty
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(ordenarTexto('Python3p')); // 3hnopty
} catch (e) {
    console.log(`Error: ${e.message}`);
}
