// Ejercicio 969: Definir una función para encontrar la palabra más extensa en una frase.

function encontrarPalabraMasExtensa(frase) {
    if (typeof frase != 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    let palabras = frase.match(/\w[a-z]{0,}/gi);

    let palabraMasExtensa = palabras[0];

    for(let i = 1; i < palabras.length; ++i) {
        if (palabraMasExtensa.length < palabras[i].length) {
            palabraMasExtensa = palabras[i];
        }
    }

    return palabraMasExtensa;
}

try {
    console.log(encontrarPalabraMasExtensa('JavaScript es tremendo'));  // JavaScript
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(encontrarPalabraMasExtensa('El caballo es de color negro.'));  // caballo
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(encontrarPalabraMasExtensa(13));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
