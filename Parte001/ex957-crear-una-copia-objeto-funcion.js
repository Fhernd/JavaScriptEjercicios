// Ejercicio 957: Definir una función personalizada para crear una copia de un objeto.

function esObjetoEstandar(objeto) {
    return Object.prototype.toString.call(objeto) === '[object Object]';
}

function crearCopia(objeto) {
    if (!esObjetoEstandar(objeto)) {
        throw TypeError('El argumento debe ser un objeto.');
    }

    return Object.assign({}, objeto);
}

let punto = {
    x: 1,
    y: 2
}

try {
    console.log(punto);
    let resultado = crearCopia(punto);
    console.log(resultado);

    console.log();

    punto.x = 5;
    console.log(punto);
    console.log(resultado);
} catch (e) {
    console.log(`Error: ${e.message}`);
}
