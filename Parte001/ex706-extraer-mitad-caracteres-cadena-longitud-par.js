// Ejercicio 706: Crear una función para extraer la primera mitad de los caracteres de un texto.

function extraerPrimeraMitad(texto) {
    if (texto.length % 2 === 0) {
        return texto.slice(0, texto.length / 2);
    } else {
        throw 'El texto no tiene un número par de caracteres.'
    }
}

try {
    console.log(extraerPrimeraMitad('JavaScript'));     // JavaS
} catch (e) {
    console.log(`Error: ${e}.`);
}

console.log();

try {
    console.log(extraerPrimeraMitad('Python'));     // Pyt
} catch (e) {
    console.log(`Error: ${e}.`);
}

console.log();

try {
    console.log(extraerPrimeraMitad('C++'));     // Error
} catch (e) {
    console.log(`Error: ${e}.`);
}
