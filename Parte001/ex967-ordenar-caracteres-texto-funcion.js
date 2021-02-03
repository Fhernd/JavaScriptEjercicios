// Ejercicio 967: Ordenar los caracteres integrales de un texto con una función personalizada.

function ordenAlfabetico(texto) {
    if (typeof texto != 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    return texto.split('').sort().join('');
}

try {
    console.log(ordenAlfabetico('JavaScript'));   // JSaaciprtv
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(ordenAlfabetico('Python v. 3.9.1'));   //   ...139Phnotvy
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(ordenAlfabetico(1000));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
