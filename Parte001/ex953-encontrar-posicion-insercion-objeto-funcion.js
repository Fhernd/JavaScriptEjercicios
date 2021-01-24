// Ejercicio 953: Definir una función para encontrar la posición de inserción de un objeto en un arreglo.

function esObjetoEstandar(objeto) {
    return Object.prototype.toString.call(objeto) === '[object Object]';
}

function indiceInsercion(datos, dato, fn) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento «datos» debe ser un arreglo.');
    }

    if (!datos.every(esObjetoEstandar)) {
        throw TypeError('El argumento «datos» únicamente puede contener objetos.');
    }

    if (!esObjetoEstandar(dato)) {
        throw TypeError('El argumento «dato» debe ser un objeto.');
    }

    if (typeof fn != 'function') {
        throw TypeError('El argumento «fn» debe ser una función.');
    }

    let esDescendente = fn(datos[0]) > fn(datos[datos.length - 1]);
    let valor = fn(dato);

    let indice = datos.map(fn).reverse().findIndex(e => (esDescendente ? valor <= e : valor >= e));

    return indice === -1 ? 0 : datos.length - indice;
}

try {
    console.log(indiceInsercion([{a: 2}, {a: 5}, {a: 11}], {a: 3}, o => o.a)); // 1
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(indiceInsercion([{a: 2}, {a: 5}, {a: 11}], {a: 1}, o => o.a)); // 0
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(indiceInsercion([{a: 2}, {a: 5}, {a: 11}], {a: 7}, o => o.a)); // 2
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(indiceInsercion([{a: 2}, {a: 5}, {a: 11}], {a: 13}, o => o.a)); // 3
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(indiceInsercion(1000, {a: 13}, o => o.a)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(indiceInsercion([{a: 2}, {a: 5}, 'ABC'], {a: 13}, o => o.a)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
