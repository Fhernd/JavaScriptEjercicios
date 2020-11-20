// Ejercicio 917: Obtener los objetos únicos de un arreglo especificando una propiedad de comparación.

function esObjetoEstandar(objeto) {
    return Object.prototype.toString.call(objeto) === '[object Object]';
}

function obtenerObjetosUnicos(objetos, comparacion) {
    if (!Array.isArray(objetos)) {
        throw TypeError('El argumento objetos debe ser un arreglo.');
    }

    if (!objetos.every(esObjetoEstandar)) {
        throw TypeError('Todos los elementos del argumento objetos deben ser objetos.');
    }

    if (typeof comparacion != 'function') {
        throw TypeError('El argumento comparacion debe ser una función.');
    }

    return objetos.reduce((a, o) => {
        if (!a.some(p => comparacion(o, p))) {
            a.push(o);
        }

        return a;
    }, []);
}

let objetos = [
    {id: 1001, valor: 'ABC'},
    {id: 1002, valor: 'DEF'},
    {id: 1001, valor: 'GHI'},
    {id: 1002, valor: 'RST'},
    {id: 1003, valor: 'XYZ'},
];

try {
    console.log(obtenerObjetosUnicos(objetos, (x, y) => x.id == y.id));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerObjetosUnicos(10000, (x, y) => x.id == y.id));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerObjetosUnicos(['A', 'B'], (x, y) => x.id == y.id));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerObjetosUnicos(objetos, {}));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
