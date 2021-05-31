// Ejercicio 1104: Ocultar parte de la dirección de un correo electrónico con una función personalizada.

// john.ortiz@outlook.com

// ['john.ortiz', 'outlook.com']

// jhon...@outlook.com

function ocultarParteEmail(email) {
    if (typeof email != 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    let partes = email.split('@');

    return partes[0].substring(0, 3) + '...' + '@' + partes[1];
}

try {
    console.log(ocultarParteEmail('john.ortiz@outlook.com'));   // joh...@outlook.com
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(ocultarParteEmail(42));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
