// Ejercicio 943: Crear una función para iterar un callback n cantidad de veces.

function invocarCallback(callback, n, contexto = undefined) {
    if (typeof callback != 'function') {
        throw TypeError('El argumento «callback» debe ser una función.');
    }

    if (typeof n != 'number') {
        throw TypeError('El argumento «n» debe ser un número.')
    }

    if (!Number.isInteger(n)) {
        throw Error('El argumento «n» debe ser un número entero.');
    }

    let i = 0;

    while (callback.call(contexto, i) !== false && ++i < n){};
}

let resultado = '';

invocarCallback(function(valor) {
    resultado += valor;
}, 10);

console.log(resultado);
