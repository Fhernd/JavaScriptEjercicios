// Ejercicio 949: Generar todas las permutaciones posibles para una cadena de caracteres.

function permutacionesCadena(texto) {
    if (typeof texto != 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    if (texto.length <= 2) {
        return texto.length === 2 ? [texto, texto[1] + texto[0]] : [texto];
    }

    return texto.split('')
        .reduce((a, c, i) => 
            a.concat(permutacionesCadena(texto.slice(0, i) + texto.slice(i + 1))
            .map(v => c + v))
        , []);
}

try {
    console.log(permutacionesCadena('abc'));
    // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(permutacionesCadena('NASA'));
} catch (e) {
    console.log(`Error: ${e.message}`);
}
