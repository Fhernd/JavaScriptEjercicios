// Ejercicio 958: Definir una función para serializar el nombre de una cookie sobre un encabezado.

// llave=valor
// Set-Cookie

function serializarCookie(nombre, valor) {
    if (String(nombre).length == 0) {
        throw Error('El argumento «nombre» debe contener datos.');
    }
    
    if (String(valor).length == 0) {
        throw Error('El argumento «valor» debe contener datos.');
    }

    return `${encodeURIComponent(nombre)}=${encodeURIComponent(valor)}`;
}

try {
    console.log(serializarCookie('edad', 29));  // edad=29
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(serializarCookie('año-nacimiento', 1999));  // a%C3%B1o-nacimiento=1999
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(serializarCookie('email', ''));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(serializarCookie('', 'daniela@mail.co'));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
