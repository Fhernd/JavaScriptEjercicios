// Ejercicio 1102: Extraer una cantidad de caracteres desde una cadena de caracteres.

function extraerCaracteres(texto, longitud) {
    if (texto.constructor !== String) {
        throw TypeError('El primer argumento debe ser una cadena de caracteres (String).');
    }

    if (!texto.length) {
        return null;
    }

    return texto.slice(0, longitud);
}

try {
    console.log(extraerCaracteres('JavaScript', 4));    // Java
    console.log(extraerCaracteres('JavaScript', 4).length);    // 4
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(extraerCaracteres(1000, 4));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`); // ...
}
