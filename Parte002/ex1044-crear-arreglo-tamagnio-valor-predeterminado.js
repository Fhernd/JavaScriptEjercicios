// Ejercicio 1044: Definir una función para crear un arreglo con tamaño y valor específicos.

function generarArreglo(tamagnio, valor) {
    if (typeof tamagnio != 'number' || !Number.isInteger(tamagnio)) {
        throw TypeError('El primer argumento debe ser un número entero.');
    }

    if (tamagnio <= 0) {
        return null;
    }

    return Array.apply(null, Array(tamagnio)).map(Number.prototype.valueOf, valor);
}

let resultado;

try {
    resultado = generarArreglo(10, 0);
    console.log(resultado); // [0, 0, ..., 0]
    console.log(resultado.length);  // 10
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    resultado = generarArreglo(5, 100);
    console.log(resultado); // [100, 100, 100, 100, 100]
    console.log(resultado.length);  // 5
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    resultado = generarArreglo('5', 100);   // Error
    console.log(resultado); // ...
    console.log(resultado.length);  // ...
} catch (e) {
    console.log(`Error: ${e.message}`);
}
