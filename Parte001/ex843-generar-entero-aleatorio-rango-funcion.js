// Ejercicio 843: Definir una función para generar un número entero aleatorio en un rango dado.

function generarEnteroAleatorio(minimo, maximo) {
    if (typeof minimo !== 'number' || typeof maximo !== 'number') {
        throw TypeError('Los dos argumentos deben ser números.');
    }

    if (minimo >= maximo) {
        return null;
    }

    return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
}

try {
    console.log(generarEnteroAleatorio(1, 6));
    console.log(generarEnteroAleatorio(1, 6));
    console.log(generarEnteroAleatorio(1, 6));
    console.log(generarEnteroAleatorio(1, 6));
    console.log(generarEnteroAleatorio(1, 6));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(generarEnteroAleatorio(new Map(), 6));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(generarEnteroAleatorio(7, 6));  // null
} catch (e) {
    console.log(`Error: ${e.message}`);
}
