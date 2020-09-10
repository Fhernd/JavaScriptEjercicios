// Ejercicio 844: Crear una función para generar varios números enteros aleatorios.

function generarEnterosAleatorios(minimo, maximo, cantidad) {
    if (typeof minimo !== 'number' || typeof maximo !== 'number' || typeof cantidad !== 'number') {
        throw TypeError('Todos los argumentos deben ser números.');
    }

    if (!Number.isInteger(minimo) || !Number.isInteger(cantidad) || !Number.isInteger(cantidad)) {
        throw TypeError('Todos los argumentos deben ser números enteros.');
    }

    if (minimo >= maximo) {
        return null;
    }

    return Array.from({length: cantidad}, () => Math.floor(Math.random() * (maximo - minimo + 1) + minimo));
}

try {
    console.log(generarEnterosAleatorios(1, 10, 15));
    console.log(generarEnterosAleatorios(1, 10, 15));
    console.log(generarEnterosAleatorios(1, 10, 15));
    console.log(generarEnterosAleatorios(1, 10, 15));
    console.log(generarEnterosAleatorios(1, 10, 15));
    console.log(generarEnterosAleatorios(1, 10, 15));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(generarEnterosAleatorios({}, 10, 15));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(generarEnterosAleatorios(17, 10, 15));  // null
} catch (e) {
    console.log(`Error: ${e.message}`);
}
