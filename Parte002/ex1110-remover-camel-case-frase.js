// Ejercicio 1110: Remover el formato camel case de una frase por medio de una función.

// JavaScriptEsTremendo
// Java Script es tremendo

function removerCamelCase(texto, separador=' ') {
    if (texto.constructor != String) {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    let resultado = texto.replace(/[A-Z]/g, function(letra) {
        return separador + letra.toLowerCase();
    });

    return resultado.replace('/^' + separador + '/', '');
}

try {
    console.log(removerCamelCase('JavaScriptEsTremento'));  // java script es tremendo
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(removerCamelCase(42));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
