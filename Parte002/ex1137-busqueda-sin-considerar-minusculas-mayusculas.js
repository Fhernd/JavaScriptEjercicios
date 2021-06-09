// Ejercicio 1137: Buscar una cadena de caracteres dentro de otra sin considerar minúsculas ni mayúsculas.

// JavaScript es un lenguaje de programación
// LENGUAJE
// lenguaje
// LENguaje

function busquedaInsensible(frase, cadena) {
    if (frase.constructor != String || cadena.constructor != String) {
        return null;
    }

    let resultado = frase.search(new RegExp(cadena, 'i'));

    return resultado > 0;
}

console.log(busquedaInsensible('JavaScript es un lenguaje de programación', 'LENGUAJE'));   // true
console.log(busquedaInsensible('JavaScript es un lenguaje de programación', 'lenguaje'));   // true
console.log(busquedaInsensible('JavaScript es un lenguaje de programación', 'LENguaje'));   // true

console.log();

console.log(busquedaInsensible('JavaScript es un lenguaje de programación', '  LENGUAJE  '));   // false
console.log(busquedaInsensible('JavaScript es un lenguaje de programación', 'lenguaje     '));   // false
console.log(busquedaInsensible('JavaScript es un lenguaje de programación', '     LENguaje '));   // false
