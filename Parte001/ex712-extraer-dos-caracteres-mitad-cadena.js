// Ejercicio 712: Crear una función para extraer los 2 caracteres ubicados en medio de un texto.

function extraerCaracteres(texto) {
    if (texto.length >= 2) {
        if (texto.length % 2 === 0) {
            let mitad = (texto.length + 1) / 2;
            
            return texto.slice(mitad - 1, mitad + 1);
        } else {
            throw Error('El texto debe tener un número par de caracteres.');
        }
    } else {
        throw Error(`El texto debe tener al menos 2 caracteres. Longitud actual: ${texto.length}.`)
    }
}

try {
    console.log(extraerCaracteres('JavaScript'));   // Sc
} catch (e) {
    console.log(`Error: ${e}`);
}

console.log();

try {
    console.log(extraerCaracteres('PHP'));   // Error
} catch (e) {
    console.log(`Error: ${e}`);
}

console.log();

try {
    console.log(extraerCaracteres('Python'));   // th
} catch (e) {
    console.log(`Error: ${e}`);
}
