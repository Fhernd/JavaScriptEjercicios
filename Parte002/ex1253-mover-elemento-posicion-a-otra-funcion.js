// Ejercicio 1253: Crear una función para mover un elemento de una posición a otra.

function moverDatos(datos, inicial, final) {
    let n = datos.length;

    if ((inicial < 0 || inicial > n) || (final < 0 || final > n)) {
        throw TypeError('Los índices especificados para el intercambio no son válidos.');
    }

    [datos[inicial], datos[final]] = [datos[final], datos[inicial]];
}

let numeros = [1, 2, 3, 4, 5];
console.log(numeros);

console.log();

moverDatos(numeros, 0, numeros.length - 1);

console.log(numeros);
