// Ejercicio 1247: Validar si un elemento existe en un arreglo con una función personalizada.

function existeDato(datos, dato) {
    return datos.indexOf(dato) !== -1;
}

console.log(existeDato([2, 3, 7, 11], 5)); // false
console.log(existeDato([2, 3, 7, 11], 7)); // true
