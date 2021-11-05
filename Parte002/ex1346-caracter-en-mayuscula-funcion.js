// Ejercicio 1346: Validar si un carácter en una posición dada de un texto está en mayúscula.

function estaEnMayuscula(texto, posicion) {
    return texto.charAt(posicion).toUpperCase() === texto.charAt(posicion);
}

console.log(estaEnMayuscula('JavaScript', 0));  // true
console.log(estaEnMayuscula('JavaScript', 4));  // true
console.log(estaEnMayuscula('JavaScript', 1));  // false
console.log(estaEnMayuscula('JavaScript', 5));  // false
