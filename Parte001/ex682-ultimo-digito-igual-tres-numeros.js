// Ejercicio 682: Comprobar si el último dígito de tres números enteros positivos es igual.

function ultimoDigitoIgual(a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
        return a % 10 == b % 10 && a % 10 == c % 10;
    } else {
        return false;
    }
}

console.log(ultimoDigitoIgual(101, 201, 302));  // false
console.log(ultimoDigitoIgual(101, 201, 301));  // true
