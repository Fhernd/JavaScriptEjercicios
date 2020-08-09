// Ejercicio 671: Comprobar si un número entero es divisible por 3 o por 7.

function divisiblePor3OPor7(numero) {
    return (numero % 3 === 0) || (numero % 7 === 0);
}

console.log(divisiblePor3OPor7(7)); // true
console.log(divisiblePor3OPor7(19)); // false
console.log(divisiblePor3OPor7(21)); // true
