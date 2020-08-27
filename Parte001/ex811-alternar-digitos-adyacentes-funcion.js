// Ejercicio 811: Alternar los dígitos adyacentes de un número representado en un arreglo.

// [1, 2, 3, 4, 5, 6] => [2, 1, 4, 3, 6, 5]

function alternarDigitosAdyacentes(digitos) {
    if (!Array.isArray(digitos)) {
        throw TypeError('El argumento debe ser un arreglo.');
    }

    if (digitos.length % 2 === 1) {
        throw Error('El arreglo debe tener una cantidad par de elementos.');
    }

    if (!digitos.every(e => typeof e === 'number' && Number.isInteger(e))) {
        throw TypeError('Todos los elementos deben ser números enteros.');
    }

    for(let i = 0; i < digitos.length; i += 2) {
        [digitos[i], digitos[i + 1]] = [digitos[i + 1], digitos[i]];
    }

    return digitos;
}

try {
    console.log(alternarDigitosAdyacentes([1, 2, 3, 4, 5, 6])); // [2, 1, 4, 3, 6, 5]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(alternarDigitosAdyacentes(new Map())); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(alternarDigitosAdyacentes([1, 2, 3, 4, 5, 6, 7])); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
