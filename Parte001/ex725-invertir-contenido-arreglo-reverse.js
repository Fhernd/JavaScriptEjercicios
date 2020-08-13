// Ejercicio 725: Invertir el contenido de un arreglo usando el método de instancia reverse().

// Array.prototype.reverse().

function invertirArreglo(elementos) {
    if (elementos instanceof Array) {
        return elementos.reverse();
    } else {
        throw TypeError('El argumento de esta función debe ser un arreglo.');
    }
}

try {
    console.log(invertirArreglo([1, 2, 3]));    // [3, 2, 1]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(invertirArreglo([]));    // []
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(invertirArreglo("[1, 2, 3]"));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(invertirArreglo(['JS', 'Python', 'C++']));    // [ 'C++', 'Python', 'JS' ]
} catch (e) {
    console.log(`Error: ${e.message}`);
}
