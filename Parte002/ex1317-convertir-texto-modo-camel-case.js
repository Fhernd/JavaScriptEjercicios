// Ejercicio 1317: Convertir una cadena de caracteres en modo CamelCase con una función.

// JavaScript es tremendo => JavaScriptEsTremendo

function convertirACamelCase(texto) {
    return texto.replace(/\W+(.)/g, function(coincidencia, c) {
        return c.toUpperCase();
    });
}

let lenguaje = 'JavaScript es tremendo';
console.log(lenguaje);

console.log();

console.log(convertirACamelCase(lenguaje));
