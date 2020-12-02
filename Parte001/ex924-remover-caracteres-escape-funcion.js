// Ejercicio 924: Crear una función para remover los caracteres de escape de una cadena HTML.

function removerCaracteresEscape(htmlEscapado) {
    if (typeof htmlEscapado != 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    return htmlEscapado.replace(/&amp;|&lt;|&gt;|&quot;|&#39;/g, c => ({
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': "'"
    }[c] || c));
}

try {
    console.log(removerCaracteresEscape('&lt;a href=&quot;https://www.wikipedia.org&quot;&gt;Wikipedia&lt;/a&gt;'));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(removerCaracteresEscape(new Map()));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
