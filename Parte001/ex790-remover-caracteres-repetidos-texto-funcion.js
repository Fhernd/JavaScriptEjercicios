// Ejercicio 790: Definir una función para remover los caracteres repetidos de un texto.

// JavaScript -> JvScript

// i = 0
// indexOf('J') === 0
// lastIndexOf('J') === 0

function removerCaracteresRepetidos(texto) {
    if (typeof texto === 'string') {
        
        let caracteres = texto.split('');
        let resultado = [];

        for(let i = 0; i < caracteres.length; ++i) {
            if (texto.indexOf(caracteres[i]) === texto.lastIndexOf(caracteres[i])) {
                resultado.push(caracteres[i]);
            }
        }

        return resultado.join('');
    } else {
        throw TypeError('El argumento debe ser un texto (cadena de caracteres).');
    }
}

try {
    console.log(removerCaracteresRepetidos('JavaScript'));  // JvScript
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(removerCaracteresRepetidos('ABCDEDCBA'));  // E
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(removerCaracteresRepetidos(new Object()));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
