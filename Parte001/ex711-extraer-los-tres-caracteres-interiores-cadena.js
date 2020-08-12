// Ejercicio 711: Crear una función para extraer los 3 caracteres ubicados en medio de un texto.

function extraer3CaracteresDelMedio(texto) {
    if (texto.length >= 3) {
        if (texto.length % 2 === 1) {
            let mitad = (texto.length + 1) / 2;

            return texto.slice(mitad - 2, mitad + 1);
        } else {
            throw Error('El texto debe tener una longitud de caracteres impar.');
        }
    } else {
        throw Error(`El texto debe tener al menos tres caracteres. Longitud actual: ${texto.length}.`);
    }
}

try {
    console.log(extraer3CaracteresDelMedio('Julia'));   // uli
} catch (e) {
    console.log(`Error: ${e}`);
}

console.log();

try {
    console.log(extraer3CaracteresDelMedio('1234567'));   // 345
} catch (e) {
    console.log(`Error: ${e}`);
}

console.log();

try {
    console.log(extraer3CaracteresDelMedio('JavaScript'));   // Error
} catch (e) {
    console.log(`Error: ${e}`);
}

console.log();

try {
    console.log(extraer3CaracteresDelMedio('C++'));   // C++
} catch (e) {
    console.log(`Error: ${e}`);
}
