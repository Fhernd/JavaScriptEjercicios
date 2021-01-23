// Ejercicio 952: Definir una función para particionar una cadena de caracteres con saltos de línea.

function particionarCadena(texto) {
    if (typeof texto != 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    return texto.split(/\r?\n/);
}

try {
    console.log(particionarCadena('¡JavaScript\nes\ntremendo!'));
    // ¡JavaScript
    // es
    // tremendo!
} catch (e) {
    console.log(`Error: ${e.message}`);
}
