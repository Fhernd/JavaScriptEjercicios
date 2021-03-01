// Ejercicio 994: Definir una función para crear un rango de valores enteros como un arreglo.

// a = 5, b = 10
// => [5, 6, 7 , 8, 9, 10]

function crearRango(a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
        throw TypeError('Ambos argumentos deben ser numéricos.')
    }

    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw TypeError('Ambos argumentos deben ser números enteros.');
    }

    if (a > b) {
        return null;
    }

    return [a, ...rango(a, b), b];
}

function rango(a, b) {
    if (b - a === 2) {
        return [a + 1];
    } else {
        let resultado = rango(a, b - 1);
        resultado.push(b - 1);

        return resultado;
    }
}

try {
    console.log(crearRango(5, 10)); // [5, 6, 7, 8, 9, 10]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(crearRango(5, '10')); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(crearRango(5, 10.3)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(crearRango(5, 1)); // null
} catch (e) {
    console.log(`Error: ${e.message}`);
}
