// Ejercicio 904: Retornar múltiples valores desde una función, y asociarlos a diferentes variables.

function efectuarCalculos(numeros) {
    if (!Array.isArray(numeros)) {
        throw TypeError('El argumento debe ser un arreglo.');
    }

    if (!numeros.every(e => typeof e == 'number')) {
        throw TypeError('Todos los elementos del arreglo deben ser números.');
    }

    let suma = numeros.reduce((a, n) => a + n, 0);
    let promedio = suma / numeros.length;
    let productoria = numeros.reduce((a, n) => a * n, 1);

    return [suma, promedio, productoria];
}

let numeros = [2, 3, 5, 7, 11];

try {
    let [suma, promedio, productoria] = efectuarCalculos(numeros);

    console.log(suma, promedio, productoria);
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    efectuarCalculos({a: 1}); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    efectuarCalculos([1, 2, 3, '4', 5]); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
