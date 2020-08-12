// Ejercicio 709: Concatenar dos cadenas. Antes omitir el primer carácter de cada una.

function concatenarCadenas(cadena1, cadena2) {
    if (cadena1.length >= 2 && cadena2.length >= 2) {
        return cadena1.substring(1) + cadena2.substring(1);
    } else {
        throw 'Las dos cadenas deben tener al menos dos caracteres.';
    }
}

try {
    console.log(concatenarCadenas('C++', 'Go'));    // ++o
} catch (e) {
    console.log(`Error: ${e}`);
}

console.log();

try {
    console.log(concatenarCadenas('C', 'Go'));    // Error
} catch (e) {
    console.log(`Error: ${e}`);
}

console.log();

try {
    console.log(concatenarCadenas('Python', 'Java'));    // ythonava
} catch (e) {
    console.log(`Error: ${e}`);
}
