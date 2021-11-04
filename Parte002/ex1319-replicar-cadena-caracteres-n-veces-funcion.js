// Ejercicio 1319: Replicar una cadena de caracteres N cantidad de veces en una función.

function replicarString(cadena, n = 1) {
    return n < 1 ? '' : new Array(n + 1).join(cadena);
}

let saludo = '¡Hola!';

console.log(replicarString(saludo, 10));
console.log(replicarString(saludo, 0));
