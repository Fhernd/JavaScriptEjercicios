// Ejercicio 848: Obtener un arreglo con pares de elementos llave-valor de un objeto.

// {x: 1, y: 2} => [['x', 1], ['y', 2]]

function esObjetoEstandar(objeto) {
    return Object.prototype.toString.call(objeto) == '[object Object]';
}

function obtenerParesObjeto(objeto) {
    if (!esObjetoEstandar(objeto)) {
        throw TypeError('El argumento debe ser un objeto.');
    }

    return Object.keys(objeto).map(p => [p, objeto[p]]);
}

try {
    console.log(obtenerParesObjeto({x: 1, y: 2}));  // [['x', 1], ['y', 2]]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerParesObjeto({}));  // []
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerParesObjeto(100));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
