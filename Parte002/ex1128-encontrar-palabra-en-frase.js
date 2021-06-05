// Ejercicio 1128: Definir una función para encontrar una palabra dentro de una frase.

function encontrarPalabra(frase, palabra) {
    if (frase.constructor != String || palabra.constructor != String) {
        throw TypeError('Ambos argumentos deben ser cadenas de caracteres (String).');
    }

    let palabras = frase.split(' ').map(p => p.toLowerCase());

    return palabras.indexOf(palabra.toLocaleLowerCase()) != -1;
}

try {
    console.log(encontrarPalabra('JavaScript es un lenguaje de programación', 'lenguaje')); // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(encontrarPalabra('JavaScript es un lenguaje de programación', 'Lenguaje')); // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(encontrarPalabra(42, 'Lenguaje')); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
