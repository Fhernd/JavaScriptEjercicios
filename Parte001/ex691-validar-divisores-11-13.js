// Ejercicio 691: Dados dos números enteros positivos, validar que ambos no sean múltiplos de 11 o 13.

function validarNumeros(a, b) {
    if (a > 0 && b > 0) {
        if (!((a % 11 == 0 || b % 11 == 0) && (a % 13 == 0 || b % 13 == 0))) {
            return (a % 11 == 0 || b % 11 == 0) || (a % 13 == 0 || b % 13 == 0);
        } else {
            return false;
        }
    } else {
        return false;
    }
}

console.log(validarNumeros(22, 26)); // false
console.log(validarNumeros(22, 27)); // true
