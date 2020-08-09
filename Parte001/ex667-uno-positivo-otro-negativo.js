// Ejercicio 667: Validar si un número es negativo y otro positivo.

function validarPositivoNegativo(a, b) {
    return (a >= 0 && b < 0) || (a < 0 && b >= 0);
}

console.log(validarPositivoNegativo(0, 0)); // false
console.log(validarPositivoNegativo(-1, -5)); // false
console.log(validarPositivoNegativo(5, -5)); // true
console.log(validarPositivoNegativo(-5, 5)); // true
