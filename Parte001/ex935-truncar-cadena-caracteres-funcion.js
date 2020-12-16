// Ejercicio 935: Definir una función para truncar un texto hasta cierta cantidad de caracteres.

function truncarTexto(texto, cantidadCaracteres) {
    if (typeof texto !== 'string') {
        throw TypeError('El argumento «texto» debe ser una cadena de caracteres.');
    }

    if (typeof cantidadCaracteres !== 'number') {
        throw TypeError('El argumento «cantidadCaracteres» debe ser un número.');
    }

    if (!Number.isInteger(cantidadCaracteres)) {
        throw Error('El argumento «cantidadCaracteres» debe ser un número entero.');
    }

    return texto.length > cantidadCaracteres ? texto.slice(0, cantidadCaracteres > 3 ? cantidadCaracteres - 3 : cantidadCaracteres) + '...' : texto;
}

try {
    console.log(truncarTexto('JavaScript es tremendo', 13));    // JavaScript...
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(truncarTexto('JavaScript es tremendo', 7));    // Java...
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(truncarTexto(12345, 7));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(truncarTexto('JavaScript es tremendo', 'ABC'));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(truncarTexto('JavaScript es tremendo', 7.7));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
