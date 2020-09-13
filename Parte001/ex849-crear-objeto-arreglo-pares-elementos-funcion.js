// Ejercicio 849: Crear un arreglo a partir de pares de elementos propiedad/valor.

// [['x', 1], ['y', 2]] => {x: 1, y: 2}

function crearObjetoDesdeArreglo(llavesValores) {
    if (!Array.isArray(llavesValores)) {
        throw TypeError('El argumento debe ser un arreglo.');
    }

    if (!llavesValores.every(e => Array.isArray(e))) {
        throw TypeError('Todos los elementos deben ser arreglos.');
    }

    if(!llavesValores.every(e => e.length === 2)) {
        throw Error('Todos los elementos deben tener exactamente 2 valores.');
    }

    return llavesValores.reduce((a, e) => ((a[e[0]] = e[1]), a), {});
}

try {
    console.log(crearObjetoDesdeArreglo([['x', 1], ['y', 2]])); // {x: 1, y: 2}
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(crearObjetoDesdeArreglo([['x', 1], ['y', 2], ['z', 4, 5]])); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(crearObjetoDesdeArreglo([['x', 1], ['y', 2], 100])); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(crearObjetoDesdeArreglo(new Object())); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
