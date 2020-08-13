// Ejercicio 726: Encontrar el mayor valor entre el primer y último elemento de un arreglo, y reemplazar el resto con ese valor.

function encontrarMaximoYReemplazar(numeros) {
    if (numeros instanceof Array) {
        let maximo = Math.max(numeros[0], numeros[numeros.length - 1]);

        return numeros.map((n) => maximo);
    } else {
        throw TypeError('El argumento de esta función debe ser un arreglo.');
    }
}

try {
    console.log(encontrarMaximoYReemplazar([7, 5, 11, 2, 3]));  // [7, 7, 7, 7, 7]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(encontrarMaximoYReemplazar([]));  // []
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(encontrarMaximoYReemplazar("[7, 5, 11, 2, 3]"));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(encontrarMaximoYReemplazar([0.11, 0.5, 0.13, 0.29, 0.7]));  // [0.7, 0.7, 0.7, 0.7, 0.7]
} catch (e) {
    console.log(`Error: ${e.message}`);
}
