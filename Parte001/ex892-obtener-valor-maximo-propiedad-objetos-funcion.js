// Ejercicio 892: Definir una función para obtener el valor máximo de una propiedad de varios objetos.

function esObjetoEstandar(objeto) {
    return Object.prototype.toString.call(objeto) === '[object Object]';
}

function valorMaximoPropiedad(objetos, funcion) {
    if (!Array.isArray(objetos)) {
        throw TypeError('El argumento «objetos» debe ser un arreglo.');
    }

    if (!objetos.every(o => esObjetoEstandar(o))) {
        throw TypeError('Todos los elementos del arreglo deben ser objetos.');
    }

    return Math.max(...objetos.map(typeof funcion === 'function' ? funcion : o => o[funcion]));
}

let computadores = [
    {id: 1001, precio: 10000},
    {id: 1002, precio: 15000},
    {id: 1003, precio: 8000},
    {id: 1004, precio: 14500},
]

try {
    console.log(valorMaximoPropiedad(computadores, 'precio'));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(valorMaximoPropiedad(computadores, c => c.precio));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(valorMaximoPropiedad(100, c => c.precio));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

computadores.push(new Set());

try {
    console.log(valorMaximoPropiedad(computadores, c => c.precio)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();
