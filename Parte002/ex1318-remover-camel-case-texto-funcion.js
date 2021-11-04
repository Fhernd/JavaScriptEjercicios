// Ejercicio 1318: Remover el modo CamelCase de un texto con una función propia.

// JavaScriptEsTremendo => java script es tremendo

function removerCamelCase(texto) {
    texto = texto.replace(/[A-Z]/g, function(letra) {
        return ' ' + letra.toLowerCase();
    });

    return texto.slice(1);
}

let lenguaje = 'JavaScriptEsTremendo';
console.log(lenguaje);

console.log();

console.log(removerCamelCase(lenguaje));    
