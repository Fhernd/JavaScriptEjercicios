// Ejercicio 984: Crear una función para contar el número de ocurrencias de un carácter en un texto.

function contadorOcurrenciasCaracter(texto, caracter) {
    if (typeof texto != 'string') {
        throw TypeError('El argumento texto debe ser una cadena de caracteres.');
    }
    
    if (typeof caracter != 'string') {
        throw TypeError('El argumento caracter debe ser una cadena de caracteres.');
    }

    if (caracter.length != 1) {
        throw Error('La longitud del carácter debe ser igual a 1.');
    }

    let conteoOcurrencias = 0;

    for(let i = 0; i < texto.length; ++i) {
        if (texto.charAt(i) == caracter) {
            ++conteoOcurrencias;
        }
    }

    return conteoOcurrencias;
}

try {
    console.log(contadorOcurrenciasCaracter('JavaScript es tremendo', 'a'));    // 2
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(contadorOcurrenciasCaracter('JavaScript es tremendo', 'A'));    // 0
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(contadorOcurrenciasCaracter('JavaScript es tremendo', 'e'));    // 3
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(contadorOcurrenciasCaracter(42, 'e'));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(contadorOcurrenciasCaracter('JavaScript es tremendo', 'Ja'));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(contadorOcurrenciasCaracter('JavaScript es tremendo', 42));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
