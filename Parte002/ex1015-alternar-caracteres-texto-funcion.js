// Ejercicio 1015: Definir una función personalizada para alternar los caracteres de un texto.

// JavaScript -> jAVAsCRIPT

function alternarCaracteres(texto) {
    if (typeof texto != 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }
    
    return texto.split('').map(c => c.toUpperCase() == c ? c.toLowerCase() : c.toUpperCase()).join('');
}

try {
    console.log(alternarCaracteres('JavaScript'));  // jAVAsCRIPT
} catch (e) {
    console.log(`Error: ${e.message}`);
}
