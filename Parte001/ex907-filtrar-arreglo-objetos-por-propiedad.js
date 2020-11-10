// Ejercicio 907: Filtrar un arreglo de objetos a través de una propiedad y removerla del resultado final.

function esObjetoEstandar(objeto) {
    return Object.prototype.toString.call(objeto) == '[object Object]';
}

function filtrarPorPropiedad(objetos, propiedades, filtro) {
    if (!Array.isArray(objetos)) {
        throw TypeError('El primer argumento debe ser un arreglo.');
    }

    if (!objetos.every(esObjetoEstandar)) {
        throw TypeError('El primer argumento sólo puede contener objetos.');
    }

    if (!Array.isArray(propiedades)) {
        throw TypeError('El segundo argumento debe ser un arreglo.');
    }

    if (!propiedades.every(e => typeof e == 'string')) {
        throw TypeError('El segundo argumento sólo puede contener cadenas de caracteres.');
    }

    if (typeof filtro != 'function') {
        throw TypeError('El tercer argumento debe ser una función.');
    }

    return objetos.filter(filtro).map(o => propiedades.reduce((a, p) => {
        a[p] = o[p];
        return a;
    }, {}));
}

let computadores = [
    {id: 1001, marca: 'MSi', cpu: 'Intel', ram: 32, ssd: 512},
    {id: 1002, marca: 'Apple', cpu: 'Intel', ram: 16, ssd: 720},
    {id: 1003, marca: 'Clone', cpu: 'Intel', ram: 128, ssd: 1024},
];

try {
    console.log(filtrarPorPropiedad(computadores, ['marca', 'id'], c => c.ssd > 600));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(filtrarPorPropiedad(1000, ['marca', 'id'], c => c.ssd > 600));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(filtrarPorPropiedad([{id: 1001, marca: 'MSi', cpu: 'Intel', ram: 32, ssd: 512}, 200], ['marca', 'id'], c => c.ssd > 600));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(filtrarPorPropiedad(computadores, 1000, c => c.ssd > 600)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(filtrarPorPropiedad(computadores, ['marca', {}, 'id'], c => c.ssd > 600));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(filtrarPorPropiedad(computadores, ['marca', 'id'], new Map())); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
