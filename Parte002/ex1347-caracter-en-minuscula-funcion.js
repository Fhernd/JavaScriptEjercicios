// Ejercicio 1347: Validar si un carácter en una posición dada de un texto está en minúscula.

function estaEnMinuscula(texto, posicion) {
    return texto.charAt(posicion).toLowerCase() === texto.charAt(posicion);
}

console.log(estaEnMinuscula('JavaScript', 0));  // false
console.log(estaEnMinuscula('JavaScript', 4));  // false
console.log(estaEnMinuscula('JavaScript', 1));  // true
console.log(estaEnMinuscula('JavaScript', 5));  // true
