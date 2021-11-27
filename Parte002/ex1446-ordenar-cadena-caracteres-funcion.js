// Ejercicio 1446: Ordenar alfabéticamente una cadena de caracteres en una función.

function ordenarTexto(texto) {
    return [...texto].sort((a, b) => a.localeCompare(b)).join('');
}

console.log(ordenarTexto('JavaScript'));        // aaciJprStv
