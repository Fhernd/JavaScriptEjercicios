// Ejercicio 720: Crear una función para rotar a la izquierda el contenido de un arreglo de 3 elementos.

// [1, 2, 3] => [2, 3, 1]

function rotarArreglo(elementos) {
    if (elementos instanceof Array) {
        if (elementos.length === 3) {
            return [elementos[1], elementos[2], elementos[0]];
        } else {
            throw Error('El arreglo debe tener exactamente 3 elementos.');
        }
    } else {
        throw TypeError('El argumento debe ser un arreglo.');
    }
}

try {
    console.log(rotarArreglo([1, 2, 3]));   // [2, 3, 1]
} catch (e) {
    console.log(e.message);
}

console.log();

try {
    console.log(rotarArreglo("[1, 2, 3]"));   // Error
} catch (e) {
    console.log(e.message);
}

console.log();

try {
    console.log(rotarArreglo([1, 2, 3, 4, 5]));   // Error
} catch (e) {
    console.log(e.message);
}

console.log();

try {
    console.log(rotarArreglo(['JavaScript', 'Python', 'Java']));   // ['Python', 'Java, 'JavaScript']
} catch (e) {
    console.log(e.message);
}
