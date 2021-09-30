// Ejercicio 1217: Crear una función a la medida para separar elementos de un texto.

// Alemania-Colombia-Perú-Rusia-Tailandia
// => ['Alemania', 'Colombia', 'Perú', ...]

function separarElementos(texto, separador='-') {
    if (typeof texto != 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    let resultado = [];
    let palabra = '';

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] != separador) {
            palabra += texto[i];
        } else {
            resultado.push(palabra);
            palabra = '';
        }
    }

    return resultado;
}

let texto = 'Alemania-Colombia-Perú-Rusia-Tailandia';

try {
    console.log(separarElementos(texto)); // ['Alemania', 'Colombia', 'Perú', ...]
} catch (e) {
    console.log(`Error: ${e.message}`);
}
