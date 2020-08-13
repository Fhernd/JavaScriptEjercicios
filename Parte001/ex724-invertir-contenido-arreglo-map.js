// Ejercicio 724: Usar la función map() para invertir el contenido de un arreglo.

function invertirArreglo(elementos) {
    if (elementos instanceof Array) {
        return elementos.map((valor, indice, arreglo) => arreglo[(arreglo.length - 1) - indice]);
    } else {
        throw TypeError('La función espera un elemento de tipo arreglo.');
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
    console.log(invertirArreglo(['JS', 'Python', 'C++']));    // ['C++', 'Python', 'JS']
} catch (e) {
    console.log(`Error: ${e.message}`);
}
