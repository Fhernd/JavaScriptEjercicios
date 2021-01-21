// Ejercicio 947: Calcular la diferencia simétrica entre dos arreglos usando una función comparadora.

function diferenciaSimetrica(a, b, funcionComparadora) {
    if (!Array.isArray(a)) {
        throw TypeError('El argumento «a» debe ser un arreglo.');
    }
    
    if (!Array.isArray(b)) {
        throw TypeError('El argumento «b» debe ser un arreglo.');
    }

    if (typeof funcionComparadora != 'function') {
        throw TypeError('El argumento «funcionComparadora» debe ser una función.');
    }

    return [...a.filter(e => b.findIndex(f => funcionComparadora(e, f)) == -1),
            ...b.filter(e => a.findIndex(f => funcionComparadora(e, f)) == -1)];
}

let A = [1, 1.2, 1.5, 3, 0];
let B = [1.9, 3, 0, 3.9];

try {
    console.log(diferenciaSimetrica(A, B, (e, f) => Math.round(e) === Math.round(f)));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

// A => 1, 1, 2, 3, 0
// B => 2, 3, 0, 4
// A DS B => [1, 1.2, 3.9]
