// Ejercicio 769: Crear una función para validar si una frase está correctamente formada.

function fraseValida(frase) {
    if (typeof frase === 'string') {
        if (frase.length)  {
            let primerCaracter = frase[0];
            let ultimoCaracter = frase[frase.length - 1];

            return /[A-Z]/.test(primerCaracter) && ultimoCaracter == '.';
        } else {
            throw Error('La cadena debe tener al menos un carácter.');
        }
    } else {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }
}

try {
    console.log(fraseValida('JavaScript es un lenguaje de programción.'));  // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(fraseValida('javascript es un lenguaje de programción.'));  // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(fraseValida(1001));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(fraseValida(''));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(fraseValida(String()));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(fraseValida(new String()));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
