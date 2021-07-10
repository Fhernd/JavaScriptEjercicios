// Ejercicio 1183: Definir una función para convertir radianes en grados.

function convertirRadianesGrados(radianes) {
    return radianes * (180 / Math.PI);
}

console.log(convertirRadianesGrados(Math.PI));  // 180

console.log(convertirRadianesGrados(Math.PI / 2));  // 90

console.log(convertirRadianesGrados(2 * Math.PI));  // 360
