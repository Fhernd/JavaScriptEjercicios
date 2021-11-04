// Ejercicio 1320: Insertar un texto en una posición dada de una cadena de caracteres.

// Java es tremendo
// Script
// => JavaScript es tremendo

function insertarTexto(frase, texto, posicion) {
    return frase.slice(0, posicion) + texto + frase.slice(posicion);
}

console.log(insertarTexto('Java es tremendo', 'Script', 4));    // JavaScript es tremendo
