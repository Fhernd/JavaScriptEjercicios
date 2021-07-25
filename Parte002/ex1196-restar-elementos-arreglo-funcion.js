// Ejercicio 1196: Restar los elementos de un arreglo a través de una función personalizada.

function restarNumerosArreglo(numeros) {
    if (!Array.isArray(numeros)) {
        return null;
    }

    let total = numeros[0];

    if (!total) {
        return 0;
    }

    for (let i = 1; i < numeros.length; i++) {
        total -= numeros[i];
    }

    return total;
}

console.log(restarNumerosArreglo([5, 1, 2, -3]));   // 5
console.log(restarNumerosArreglo([7, 1, 7, -2]));   // 1
console.log(restarNumerosArreglo(new Set()));   // null
