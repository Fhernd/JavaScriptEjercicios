// Ejercicio 1174: Definir una función para calcular la n-ésima raíz de un número.

function calcularNRaiz(numero, n) {
    if (typeof numero != 'number' || typeof n != 'number') {
        return null;
    }

    if (numero < 0) {
        return undefined;
    }

    return Math.pow(numero, 1/n);
}

console.log(calcularNRaiz(16, 2));  // 4
console.log(calcularNRaiz(27, 3));  // 3
console.log(calcularNRaiz(100, 2));  // 10
console.log(calcularNRaiz(256, 4));  // 4
