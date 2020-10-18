// Ejercicio 889: Aplicar una operación a los caracteres de un texto en una función.

function aplicarOperacionCaracteres(texto, operacion=(c) => c.toUpperCase()) {
    if (typeof texto != 'string') {
        throw TypeError('El argumento «texto» debe ser una cadena de caracteres.');
    }

    if (typeof operacion != 'function') {
        throw TypeError('El argumento «operacion» debe ser una función.');
    }

    return texto.split('').map(c => operacion(c)).join('');
}

try {
    console.log(aplicarOperacionCaracteres('JavaScript'));  // JAVASCRIPT
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(aplicarOperacionCaracteres('JavaScript', (c) => c.toLowerCase()));  // javascript
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(aplicarOperacionCaracteres('JavaScript', (c) => `'${c}'`));  // 'j''a''v''a''s''c''r''i''p''t'
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(aplicarOperacionCaracteres(0, (c) => `'${c}'`));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
