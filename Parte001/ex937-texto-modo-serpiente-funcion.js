// Ejercicio 937: Definir una función para generar la representación de texto en modo serpiente.

// Java Es Tremendo => java_es_tremendo
// JavaScript => java_script

function textoSerpiente(texto) {
    if (typeof texto != 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    return texto && texto.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(p => p.toLowerCase())
        .join('_');
}

try {
    console.log(textoSerpiente('JavaScript es Genial'));    // java_script_es_genial
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(textoSerpiente('Java Script es Genial'));    // java_script_es_genial
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(textoSerpiente('Java_Script es Genial'));    // java_script_es_genial
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(textoSerpiente(1000));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
