// Ejercicio 870: Crear una función para encontrar el primer valor no null o undefined.

function encontrarPrimerElementoNoNull(datos) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento debe ser un arreglo.');
    }

    if (!datos.length) {
        return null;
    }

    return datos.find(d => ![null, undefined].includes(d));
}

try {
    console.log(encontrarPrimerElementoNoNull([null, undefined, 'JS', null, 'Python', {a: 1}]));  // 'JS'
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(encontrarPrimerElementoNoNull([null, undefined, '', null, 'Python', {a: 1}]));  // ''
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(encontrarPrimerElementoNoNull(100));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}


console.log();

try {
    console.log(encontrarPrimerElementoNoNull([]));  // null
} catch (e) {
    console.log(`Error: ${e.message}`);
}
