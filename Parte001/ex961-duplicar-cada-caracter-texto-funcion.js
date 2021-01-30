// Ejercicio 961: Definir una función que duplique cada carácter de una cadena de caracteres.

function duplicarCaracteres(texto) {
    if (typeof texto != 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    let caracteres = texto.split('');

    return caracteres.map(c => c.repeat(2)).join('');
}

try {
    console.log(duplicarCaracteres('JavaScript'));  // JJaavvaaSSccrriipptt
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(duplicarCaracteres(1000));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
