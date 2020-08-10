// Ejercicio 688: Comprobar si el primer dígito de tres números en todos es igual.

function primerDigitoIgual(a, b, c) {
    a = parseInt(String(a)[0])
    b = parseInt(String(b)[0])
    c = parseInt(String(c)[0])

    return a == b && a == c;
}

console.log(primerDigitoIgual(11, 13, 23)); // false
console.log(primerDigitoIgual(11, 23, 13)); // false
console.log(primerDigitoIgual(23, 11, 13)); // false
console.log(primerDigitoIgual(19, 11, 13)); // true
console.log(primerDigitoIgual(190000, 1100, 113)); // true
