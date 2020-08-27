// Ejercicio 810: Definir una función para cambiar la capitalización de un cadena de caracteres.

// JavaScript => jAVAsCRIPT

function cambiarCapitalizacion(texto) {
    if (typeof texto !== 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    let resultado = '';

    for(let i = 0; i < texto.length; ++i) {
        if (/[a-z]/.test(texto[i])) {
            resultado += texto[i].toUpperCase();
        } else {
            resultado += texto[i].toLowerCase();
        }
    }

    return resultado;
}

try {
    console.log(cambiarCapitalizacion('JavaScript'));   // jAVAsCRIPT
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(cambiarCapitalizacion(new Set()));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
