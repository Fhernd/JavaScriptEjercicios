// Ejercicio 998: Definir una función recursiva para validar si un número es par.

function esParRecursivo(numero) {
    if (numero < 0) {
        numero = Math.abs(numero);
    }

    if (numero === 0) {
        return true;
    }

    if (numero === 1) {
        return false;
    } else {
        numero -= 2;

        return esParRecursivo(numero);
    }
}

console.log(esParRecursivo(13)); // false
console.log(esParRecursivo(18)); // true
console.log(esParRecursivo(-19)); // false
console.log(esParRecursivo(19)); // false
console.log(esParRecursivo(100)); // true
console.log(esParRecursivo(10050)); // true
