// Ejercicio 1152: Definir una función para generar un entero aleatorio en un rango dado.

function generarEnteroAleatorio(minimo, maximo) {
    if (typeof minimo != 'number' || !Number.isInteger(minimo)) {
        throw TypeError('El primer argumento debe ser un número entero.');
    }
    
    if (typeof maximo != 'number' || !Number.isInteger(maximo)) {
        throw TypeError('El segundo argumento debe ser un número entero.');
    }

    if (minimo >= maximo) {
        throw Error('El valor mínimo debe ser menor a máximo.');
    }

    return minimo + Math.floor(Math.random() * (maximo - minimo + 1));
}

for (let i = 1; i <= 10; i++) {
    console.log(generarEnteroAleatorio(1, 6));
}
