// Ejercicio 788: Crear una función para validar si una fracción es propia o impropia.

// propia: cuando el numerador es menor al denominador.
// impropia: cuando denominador es mayor al numerador.

function validarFraccion(fraccion) {
    if (Array.isArray(fraccion)) {
        if (fraccion.length === 2) {
            if (fraccion.every((n) => typeof n === 'number')) {
                return Math.abs(fraccion[0] / fraccion[1]) < 1;
            } else {
                throw TypeError('Los elementos del arreglo (fracción) deben ser números.');
            }
        } else {
            throw Error('El arreglo debe tener dos elementos.');
        }
    } else {
        throw TypeError('El argumento debe ser un arreglo.');
    }
}

try {
    console.log(validarFraccion([1, 2]));  // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(validarFraccion([7, 2]));  // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(validarFraccion(1, 2));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(validarFraccion([1, 2, 3]));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(validarFraccion([1, '2']));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
