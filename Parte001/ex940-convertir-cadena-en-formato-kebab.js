// Ejercicio 940: Crear una función para convertir una cadena en formato Kebab (pincho).

// JavaScript es tremendo => java-script-Es-Tremendo

function formatoKebab(texto) {
    if (typeof texto != 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    return texto && texto.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(p => p.toLowerCase())
        .join('-');
}

try {
    console.log(formatoKebab('JavaScript es tremendo'));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(formatoKebab('python_es_un_lenguaje_de_programación'));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(formatoKebab(1000));
} catch (e) {
    console.log(`Error: ${e.message}`);
}
