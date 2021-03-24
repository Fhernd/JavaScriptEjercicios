// Ejercicio 1017: Definir una función para sumar el cuadrado de varios números.

function sumarCuadrados(numeros) {
    if (!Array.isArray(numeros)) {
        throw TypeError('El argumento debe ser un arreglo.');
    }

    if (!numeros.every(e => typeof e == 'number')) {
        throw TypeError('Todos los elementos del arreglo deben ser números.');
    }

    return numeros.map(n => Math.pow(n, 2)).reduce((a, c)=> (a += c, a) , 0);
}

try {
    console.log(sumarCuadrados([1, 2, 3, 4, 5]));
    // [1, 4, 9, 16, 25] => 55
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(sumarCuadrados({n: 1000})); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(sumarCuadrados([1, 2, 3, '4', 5])); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
