// Ejercicio 798: Obtener la cantidad de elementos iguales que hay en dos arreglos.

function obtenerCantidadElementosIguales(arreglo1, arreglo2) {
    if (!Array.isArray(arreglo1) || !Array.isArray(arreglo2)) {
        throw TypeError('Ambos argumentos deben ser arreglos.');
    }

    let contador = 0;

    for(let i = 0; i < arreglo1.length; ++i) {
        for(let j = 0; j < arreglo2.length; ++j) {
            if (arreglo1[i] === arreglo2[j]) {
                ++contador;
            }
        }
    }

    return contador;
}

try {
    console.log(obtenerCantidadElementosIguales([1, 2, 3], [1, 2, 3, 4]));  // 3
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerCantidadElementosIguales([1, 2, 3], [4, 5, 6]));  // 0
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerCantidadElementosIguales('[1, 2, 3]', [4, 5, 6]));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerCantidadElementosIguales([1, 2, 3], '[4, 5, 6]'));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
