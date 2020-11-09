// Ejercicio 906: Extraer las propiedades y valores de un objeto que cumplan con un tipo de dato específico.

function esObjetoEstandar(objeto) {
    return Object.prototype.toString.call(objeto) == '[object Object]';
}

function extraerPropiedadesTipo(objeto, funcion) {
    if (!esObjetoEstandar(objeto)) {
        throw TypeError('El primer argumento debe ser un objeto.');
    }

    if (typeof funcion != 'function') {
        throw TypeError('El segundo argumento debe ser una función.');
    }

    return Object.keys(objeto).filter(p => funcion(objeto[p]))
                 .reduce((a, p) => ((a[p] = objeto[p]), a), {});
}

let computador = {
    id: 1001,
    marca: 'MSi',
    cpu: 'Intel',
    ram: 32,
    ssd: 500,
    precio: 799
};

try {
    console.log(extraerPropiedadesTipo(computador, p => typeof p == 'string'));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(extraerPropiedadesTipo(computador, p => typeof p == 'number'));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(extraerPropiedadesTipo(computador, p => typeof p == 'boolean'));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(extraerPropiedadesTipo(1000, p => typeof p == 'boolean'));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(extraerPropiedadesTipo(computador, 'abc'));
} catch (e) {
    console.log(`Error: ${e.message}`);
}
