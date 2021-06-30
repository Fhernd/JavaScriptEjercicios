// Ejercicio 1176: Definir una función para calcular el múltiplo de 5 más cercano a un valor dado.

// 13
// 2.6 => 3 => 15

function calcularMultiplo5(numero) {
    return Math.ceil(numero / 5) * 5;
}

console.log(calcularMultiplo5(13)); // 15
console.log(calcularMultiplo5(17)); //  20
console.log(calcularMultiplo5(147));    // 150
