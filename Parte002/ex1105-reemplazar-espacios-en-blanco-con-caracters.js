// Ejercicio 1105: Reemplazar los caracteres en blanco por un carácter específico en una función.

// JavaScript     es un   lenguaje de    programación

// JavaScript-es-un-lenguaje-de-programacion

function reemplazarEspacios(frase, caracter='-') {
    if (typeof frase != 'string') {
        throw TypeError('El primer argumento debe ser una cadena de caracteres.');
    }

    return frase.replace(/\s+/g, caracter);
}

try {
    console.log(reemplazarEspacios('JavaScript     es un   lenguaje de    programación'));  
    // JavaScript-es-un-lenguaje-de-programacion
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(reemplazarEspacios('JavaScript     es un   lenguaje de    programación', '='));  
    // JavaScript=es=un=lenguaje=de=programacion
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(reemplazarEspacios(123, '='));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
