// Ejercicio 1184: Definir una función para calcular la hipotenusa de un triángulo con el teorema de Pitágoras.

function calcularHipotenusa(ladoA, ladoB) {
    if (typeof ladoA != 'number' || typeof ladoB != 'number') {
        return null;
    }

    return Math.sqrt(Math.pow(ladoA, 2) + Math.pow(ladoB, 2));
}

console.log(calcularHipotenusa(4, 3));  // sqrt(16 + 9) = sqrt(25) = 5

console.log(calcularHipotenusa(7, 11));  // sqrt(49 + 121) = sqrt(170) = ~13.039
