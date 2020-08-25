// Ejercicio 799: Usar un objeto Set para obtener la cantidad elementos iguales en dos arreglos.

function obtenerCantidadElementosIguales(arreglo1, arreglo2) {
    if (!Array.isArray(arreglo1) || !Array.isArray(arreglo2)) {
        throw TypeError('Ambos argumentos deben ser arreglos.');
    }

    let conjunto1 = new Set(arreglo1);
    let conjunto2 = new Set(arreglo2);

    let interseccion = new Set([...conjunto1].filter(e => conjunto2.has(e)));

    return interseccion.size;
}

try {
    console.log(obtenerCantidadElementosIguales([1, 2, 3], [2, 3, 5])); // 2
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerCantidadElementosIguales([1, 2, 3], [4, 5, 6])); // 0
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerCantidadElementosIguales(new Object(), [4, 5, 6])); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerCantidadElementosIguales([4, 5, 6], new Map())); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
