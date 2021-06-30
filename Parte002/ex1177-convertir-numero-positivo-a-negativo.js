// Ejercicio 1177: Convertir un número positivo en un número negativo.

function convertirPositivoNegativo(numero) {
    return -Math.abs(numero);
}

console.log(convertirPositivoNegativo(15));     // -15
console.log(convertirPositivoNegativo(17));     // -17
console.log(convertirPositivoNegativo(13));     // -13
console.log(convertirPositivoNegativo(-13));    // -13
