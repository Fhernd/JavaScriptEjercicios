// Ejercicio 737: Reemplazar cada carácter de una cadena por el siguiente en el alfabeto.

// abcxyz => bcdyza

function desplazarUnCaracter(cadena) {
    if (typeof cadena === 'string') {
        let caracteres = cadena.split('');

        for(let i = 0; i < caracteres.length; ++i) {
            let diferencia = caracteres[i].charCodeAt() - 'a'.charCodeAt();
            diferencia = (diferencia + 1) % 26;

            caracteres[i] = String.fromCharCode(diferencia + 'a'.charCodeAt());
        }

        return caracteres.join('');
    } else {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }
}

try {
    console.log(desplazarUnCaracter('abcxyz')); // bcdyza
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(desplazarUnCaracter('javascript')); // kbwbtdsjqu
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(desplazarUnCaracter(['a', 'b', 'c'])); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
