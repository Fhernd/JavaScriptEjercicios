// Ejercicio 1112: Insertar una cadena de caracteres en una posición específica de un texto.

function insertarSubcadena(texto, subcadena='', posicion=0) {
    if (typeof texto != 'string' || typeof subcadena != 'string') {
        throw TypeError('Los dos primeros argumentos deben ser de tipo cadena de caracteres.');
    }

    if (typeof posicion != 'number' || !Number.isInteger(posicion)) {
        throw TypeError('El tercer argumento debe ser un número entero.');
    }

    return texto.slice(0, posicion) + subcadena +  texto.slice(posicion);
}

try {
    console.log(insertarSubcadena('Script', 'Java'));   // JavaScript
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(insertarSubcadena('JavaScript', ' es tremendo', 10));   // JavaScript es tremendo
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(insertarSubcadena('JavaScript tremendo', ' es', 10));   // JavaScript es tremendo
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(insertarSubcadena(42, ' es', 10));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
