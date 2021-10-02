// Ejercicio 1236: Invertir el contenido de un arreglo utilizando una función a la medida.

// [1, 2, 3, 4, 5]
// [5, 4, 3, 2, 1]

function invertirArreglo(datos) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento debe ser un arreglo.');
    }

    return datos.reverse();
}

let numeros = [1, 2, 3, 4, 5];
console.log(numeros);

console.log();

let resultado = invertirArreglo(numeros);
console.log(resultado);
