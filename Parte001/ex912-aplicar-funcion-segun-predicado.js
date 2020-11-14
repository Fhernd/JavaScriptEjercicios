// Ejercicio 912: Aplicar una función a un valor según el resultado de evaluación de un predicado.

function aplicarFuncion(predicado, funcion) {
    if (typeof predicado != 'function') {
        throw TypeError('El argumento «predicado» debe ser una función.');
    }
    
    if (typeof funcion != 'function') {
        throw TypeError('El argumento «funcion» debe ser una función.');
    }

    return valor => predicado(valor) ? funcion(valor) : valor;
}

try {
    let triplicarImpares = aplicarFuncion(x => x % 2 == 1, x => x * 3);
    console.log(triplicarImpares(3));   // 9
    console.log(triplicarImpares(2));   // 2
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    let triplicarImpares = aplicarFuncion(100, x => x * 3);
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    let triplicarImpares = aplicarFuncion(x => x % 2 == 1, 2000);
} catch (e) {
    console.log(`Error: ${e.message}`);
}
