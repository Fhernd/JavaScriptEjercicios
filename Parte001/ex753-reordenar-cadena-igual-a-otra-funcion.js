// Ejercicio 753: Verificar si al ordenar dos cadenas de caracteres éstas resultan similares.

// abc => abc       
// bca => abc

function cadenasSimilares(texto1, texto2) {
    if (typeof texto1 === 'string' && typeof texto2 === 'string') {
        let caracteresTexto1 = texto1.split('');
        let caracteresTexto2 = texto2.split('');

        caracteresTexto1.sort();
        caracteresTexto2.sort();

        for(let i = 0; i < Math.min(caracteresTexto1.length, caracteresTexto2.length); ++i) {
            if (caracteresTexto1[i] !== caracteresTexto2[i]) {
                return false;
            }
        }

        return true;
    } else {
        throw TypeError('Ambos parámetros deben ser de tipo cadena de caracteres.');
    }
}

try {
    console.log(cadenasSimilares('abc', 'cba'));    // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(cadenasSimilares('abc', 'Cba'));    // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(cadenasSimilares('abc', 101));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
