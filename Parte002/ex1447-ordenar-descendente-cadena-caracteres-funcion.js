// Ejercicio 1447: Ordenar alfabéticamente (descendente) una cadena de caracteres en una función.

function ordenarTexto(texto) {
    return [...texto].sort((a, b) => b.localeCompare(a)).join('');
}

console.log(ordenarTexto('JavaScript'));        // aaciJprStv => vtSrpJicaa
