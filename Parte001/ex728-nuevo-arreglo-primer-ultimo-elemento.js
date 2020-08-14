// Ejercicio 728: Crear un nuevo arreglo a partir del primer y último elemento de otro arreglo.

function crearNuevoArreglo(arreglo) {
    if (arreglo instanceof Array) {
        if (arreglo.length) {
            return [arreglo[0], arreglo[arreglo.length - 1]];
        } else {
            throw Error('El arreglo debe tener al menos un elemento.');
        }
    } else {
        throw TypeError('El argumento de esta función debe ser un arreglo.');
    }
}

try {
    console.log(crearNuevoArreglo([1, 2, 3]));  // [ 1, 3 ]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(crearNuevoArreglo("[1, 2, 3]"));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(crearNuevoArreglo([]));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(crearNuevoArreglo(Array()));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(crearNuevoArreglo(new Array()));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(crearNuevoArreglo(new Array(0)));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(crearNuevoArreglo(new Array(3)));  // [ undefined, undefined ]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(crearNuevoArreglo(['JavaScript', 'C++', 'Java']));  // [ 'JavaScript', 'Java' ]
} catch (e) {
    console.log(`Error: ${e.message}`);
}
