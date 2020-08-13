// Ejercicio 721: Crear una función para comprobar que el valor 2 aparezca al inicio y al final de un arreglo.

function validarArreglo(numeros) {
    if (numeros instanceof Array) {
        if (numeros.length) {
            return numeros[0] === 2 && numeros[numeros.length - 1] === 2;
        } else {
            throw Error('El arreglo debe tener al menos un elemento.');
        }
    } else {
        throw TypeError('El argumento `numeros` debe ser un arreglo.');
    }
}

try {
    console.log(validarArreglo([2, 3, 2])); // true
} catch (e) {
    console.log(e.message);
}

console.log();

try {
    console.log(validarArreglo([2, 3, 5])); // false
} catch (e) {
    console.log(e.message);
}

console.log();

try {
    console.log(validarArreglo([2])); // true
} catch (e) {
    console.log(e.message);
}

console.log();

try {
    console.log(validarArreglo([])); // Error
} catch (e) {
    console.log(e.message);
}

console.log();

try {
    console.log(validarArreglo("[2, 3, 2]")); // Error
} catch (e) {
    console.log(e.message);
}
