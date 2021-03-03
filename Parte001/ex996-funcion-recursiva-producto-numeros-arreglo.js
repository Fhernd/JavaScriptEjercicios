// Ejercicio 996: Definir una función recursiva para calcular el producto de un arreglo de números.

function productoNumerosRecursivo(numeros) {
    if (numeros.length == 1) {
        return numeros[0];
    } else {
        return numeros.pop(0) * productoNumerosRecursivo(numeros);
    }
}

let numeros = [1, 2, 3, 4, 5];
console.log(productoNumerosRecursivo(numeros)); // 120
console.log(productoNumerosRecursivo([2, 3, 5, 7, 11, 13, 17])); // 510510
