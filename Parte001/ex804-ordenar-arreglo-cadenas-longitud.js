// Ejercicio 804: Usar la función sort() para ordenar cadenas de caracteres a partir de su longitud.

function ordenarCadenasPorLongitud(cadenas) {
    if (!Array.isArray(cadenas)) {
        throw TypeError('El argumento debe ser un arreglo.');
    }

    if (!cadenas.every(c => typeof c === 'string')) {
        throw TypeError('Todos los elementos del arreglo deben ser cadenas de caracteres.');
    }

    return cadenas.sort((a, b) => a.length - b.length);
}

try {
    console.log(ordenarCadenasPorLongitud(['JavaScript', 'Perl', 'C', 'C++', 'Python', 'Go']));
    // ['C', 'Go', 'C++', 'Perl', 'Python', 'JavaScript']
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(ordenarCadenasPorLongitud(['JavaScript', 'Perl', 100, 'C++', 'Python', 'Go'])); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(ordenarCadenasPorLongitud(new Object())); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
