// Ejercicio 803: Definir una función para ordenar las cadenas de caracteres a partir de su longitud.

function ordenarCadenasPorLongitud(cadenas) {
    if (!Array.isArray(cadenas)) {
        throw TypeError('El argumento debe ser un arreglo.');
    }

    if (!cadenas.every(c => typeof c === 'string')) {
        throw TypeError('Todos los elementos del arreglo deben ser cadenas.');
    }

    for(let i = 0; i < cadenas.length; ++i) {
        for(let j = i + 1; j < cadenas.length; ++j) {
            
            if(cadenas[i].length > cadenas[j].length) {
                let auxiliar = cadenas[i];
                cadenas[i] = cadenas[j];
                cadenas[j] = auxiliar;
            }
        }
    }

    return cadenas;
}

try {
    console.log(ordenarCadenasPorLongitud(['JavaScript', 'Perl', 'C', 'C++', 'Python', 'Go']));
    // ['C', 'Go', 'C++', 'Perl', 'Python', 'JavaScript']
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(ordenarCadenasPorLongitud(['JavaScript', 100, 'C', 'C++', 'Python', 'Go'])); // Error 
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(ordenarCadenasPorLongitud(new Object())); // Error 
} catch (e) {
    console.log(`Error: ${e.message}`);
}
