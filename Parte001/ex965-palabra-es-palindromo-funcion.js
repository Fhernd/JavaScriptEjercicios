// Ejercicio 965: Definir una función para validar si un texto es palíndromo.

// oso
// amad a la dama
// ana
// la tele letal

function esPalindromo(texto) {
    if (typeof texto != 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    texto = texto.toLowerCase().replace(' ', '');

    return texto == texto.split('').reverse().join('');
}

try {
    console.log(esPalindromo('ana'));   // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(esPalindromo('oso'));   // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(esPalindromo('lateleletal'));   // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(esPalindromo('revolver'));   // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(esPalindromo(1000));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
