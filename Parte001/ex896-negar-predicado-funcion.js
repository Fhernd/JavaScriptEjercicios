// Ejercicio 896: Definir una función para negar el predicado especificado en una función.

function negarPredicado(funcion, ...datos) {
    return datos.filter(d => !funcion(d));
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros);

console.log();

let resultado = negarPredicado(n => n % 2 == 1, ...numeros);
console.log(resultado); // [2, 4, 6, 8, 10]
