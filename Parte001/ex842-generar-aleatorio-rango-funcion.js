// Ejercicio 842: Definir una función para generar un número aleatorio en un rango dado.

function generarNumeroAleatorio(minimo, maximo) {
    if (typeof minimo !== 'number' || typeof maximo !== 'number') {
        throw TypeError('Ambos argumentos deben ser numéricos.');
    }

    if (minimo >= maximo) {
        return null;
    }

    return Math.random() * (maximo - minimo) + minimo;
}

try {
    console.log(generarNumeroAleatorio(1, 10));
    console.log(generarNumeroAleatorio(1, 10));
    console.log(generarNumeroAleatorio(1, 10));
    console.log(generarNumeroAleatorio(1, 10));
    console.log(generarNumeroAleatorio(1, 10));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(generarNumeroAleatorio({}, 10));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}


console.log();

try {
    console.log(generarNumeroAleatorio(19, 10));    // null
} catch (e) {
    console.log(`Error: ${e.message}`);
}
