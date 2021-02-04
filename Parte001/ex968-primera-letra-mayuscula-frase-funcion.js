// Ejercicio 968: Poner en mayúscula la primera letra de cada palabra de una frase.

// JavaScript es tremendo => JavaScript Es Tremendo

function ponerEnMayuscula(frase) {
    if (typeof frase != 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres (texto).');
    }

    let palabras = frase.split(' ');

    return palabras.map(p => p[0].toUpperCase() + p.slice(1)).join(' ');
}

try {
    console.log(ponerEnMayuscula('JavaScript es tremmendo'));   // JavaScript Es Tremendo
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(ponerEnMayuscula('los hermanos karámazov'));   // Los Hermanos Karámazov
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(ponerEnMayuscula(13));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
