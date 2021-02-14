// Ejercicio 974: Definir una función para obtener el segundo mínimo y máximo de un arreglo.

function obtenerSegundoMinMax(numeros) {
    if (!Array.isArray(numeros)) {
        throw TypeError('El argumento debe ser un arreglo.');
    }

    if (!numeros.every((e) => typeof e == 'number')) {
        throw TypeError('Todos los elementos del arreglo deben ser números.');
    }

    if (numeros.length <= 2) {
        return null;
    }
    

    numeros.sort((a, b) => a - b);

    return [numeros[1], ...numeros.slice(-2, numeros.length - 1)];
}

try {
    console.log(obtenerSegundoMinMax([4, 3, 1, 5, 2])); // [2, 4]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerSegundoMinMax([4, -3, -1, 5, 2])); // [-1, 4]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerSegundoMinMax([4, -3])); // [-1, 4]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerSegundoMinMax(1000)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerSegundoMinMax([4, -3, -1, 5, 'dos'])); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
