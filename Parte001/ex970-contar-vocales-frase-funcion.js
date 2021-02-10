// Ejercicio 970: Definir una función para contar el número de vocales en una frase.

function contarVocales(frase) {
    if (typeof frase != 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    let vocales = 'aeiouAEIOUáéíóúÁÉÍÓÚ';
    let contadorVocales = 0;

    for(let i = 0; i < frase.length; ++i) {
        if (vocales.indexOf(frase[i]) !== -1) {
            ++contadorVocales;
        }
    }

    return contadorVocales;
}

try {
    console.log(contarVocales('JavaScript es genial')); // 7
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(contarVocales('Los hermanos Karámazov')); // 8
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(contarVocales(1000)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
