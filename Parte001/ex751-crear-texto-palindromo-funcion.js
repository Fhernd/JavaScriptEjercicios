// Ejercicio 751: Definir una función para crear un texto palíndromo a partir de una cadena de caracteres.

// ABCD -> ABCDCBA
// oso

function crearPalindromo(cadena) {
    if (typeof cadena === 'string') {
        let sentinela;
        let i = cadena.length;

        while(true) {
            sentinela = true;

            for(let j = 0; j < i - j - 1; ++j) {
                if (i - j - 1 < cadena.length && cadena[i - j - 1] !== cadena[j]) {
                    sentinela = false;
                    break;
                }
            }

            if (sentinela) {
                for(let j = cadena.length; j < i; ++j) {
                    cadena += cadena[i - j - 1];
                }

                return cadena;
            }
            
            ++i;
        }
    } else {
        throw TypeError('El argumento debe ser de tipo cadena de caracteres.');
    }
}

try {
    console.log(crearPalindromo('ABCD'));   // ABCDCBA
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(crearPalindromo('100'));   // 1001
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(crearPalindromo(100));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
