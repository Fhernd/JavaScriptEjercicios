// Ejercicio 707: Crear una función para extraer la segunda mitad de los caracteres de un texto.

function extraerSegundaMitad(texto) {
    if (texto.length % 2 === 0) {
        return texto.slice(texto.length / 2);
    } else {
        throw 'El texto no tiene un número par de caracteres.';
    }
}

try {
    console.log(extraerSegundaMitad('JavaScript')); // cript
} catch (e) {
    console.log(`Error: ${e}`);
}

console.log();

try {
    console.log(extraerSegundaMitad('Python')); // hon
} catch (e) {
    console.log(`Error: ${e}`);
}

console.log();

try {
    console.log(extraerSegundaMitad('C++')); // hon
} catch (e) {
    console.log(`Error: ${e}`);
}
