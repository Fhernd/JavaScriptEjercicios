// Ejercicio 665: Comprobar si al menos un número de dos es igual 100, o su suma es igual a 100.

function esIgual100(a, b) {
    return ((a == 100 || b == 100) || (a + b == 100));
}

let numero1 = 30;
let numero2 = 20;
let resultado = esIgual100(numero1, numero2);
console.log(resultado); // false

console.log();

numero2 = 70;
resultado = esIgual100(numero1, numero2);
console.log(resultado); // true

console.log();

numero1 = 100;
resultado = esIgual100(numero1, numero2);
console.log(resultado); // true
