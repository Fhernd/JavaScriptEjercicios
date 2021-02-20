// Ejercicio 985: Crear una función para encontrar la primera letra no repetida en un texto.

function encontrarPrimerCaracterNoRepetido(texto) {
    if (typeof texto != 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    let caracteres = texto.split('');
    let contador = 0;

    for(let i = 0; i < caracteres.length; ++i) {
        contador = 0;

        for(let j = 0; j < caracteres.length; ++j) {
            if (caracteres[i] == caracteres[j]) {
                ++contador;
            }
        }

        if (contador < 2) {
            return caracteres[i];
        }
    }

    return '';
}

try {
    console.log(encontrarPrimerCaracterNoRepetido('AABBBCDDEEFGHHH'));  // C
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(encontrarPrimerCaracterNoRepetido('AABBBCCDDEEFGHHH'));  // F
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(encontrarPrimerCaracterNoRepetido('AABBBCCDDEEFFGGHHH'));  // ''
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(encontrarPrimerCaracterNoRepetido(new Set()));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
