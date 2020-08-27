// Ejercicio 807: Definir una función para calcular la suma de los dígitos que hay en una cadena.

// Python 3.8.1 => [3, 8, 1] => 12

function sumarDigitosTexto(texto) {
    if (typeof texto !== 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    let digitos = texto.split('').filter(c => !Number.isNaN(parseInt(c))).map(c => parseInt(c));

    let sumaDigitos = 0;

    digitos.forEach(d => sumaDigitos += d);

    return sumaDigitos;
}

try {
    console.log(sumarDigitosTexto('Python 3.8.1')); // 12
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(sumarDigitosTexto('Los primeros 5 números primos son: 2, 3, 5, 7, 11')); // 24
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(sumarDigitosTexto(new Object())); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
