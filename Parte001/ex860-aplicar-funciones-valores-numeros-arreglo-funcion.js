// Ejercicio 860: Definir una función para aplicar una operación a todos los elementos de un arreglo.

function aplicarFuncionArreglo(numeros, fn=Math.sqrt) {
    if (!Array.isArray(numeros)) {
        throw TypeError('El argumento «numeros» debe ser un arreglo.');
    }

    if (!numeros.every(e => typeof e == 'number')) {
        throw TypeError('Todos los elementos del arreglo deben ser números.');
    }

    if (typeof fn != 'function') {
        throw TypeError('El segundo argumento debe ser una función.');
    }

    return numeros.map(n => fn(n));
}

try {
    console.log(aplicarFuncionArreglo([1, 2, 3, 4, 5]));   // [1.0, 1.41, 1.73, 2, 2.23]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(aplicarFuncionArreglo([1, 2, 3, 4, 5], (x) => x * x));   // [1, 4, 9, 16, 25
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(aplicarFuncionArreglo([1, 2, 3, 4, 5], Math.sin));   // [1, 4, 9, 16, 25
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(aplicarFuncionArreglo({}));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(aplicarFuncionArreglo([1, 2, '3', 4, 5]));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(aplicarFuncionArreglo([1, 2, 3, 4, 5], new Map()));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
