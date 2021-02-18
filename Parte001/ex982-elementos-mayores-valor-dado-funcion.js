// Ejercicio 982: Definir una función para obtener los valores mayores a un número dado.

function elementosMayores(numero) {
    return function(v, i, a) {
        return v > numero;
    }
}

let numeros = [13, 11, 7, 19, 2, 5, 23, 3];

let resultado = numeros.filter(elementosMayores(7));

console.log(resultado); // [13, 11, 19, 23]
