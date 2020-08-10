// Ejercicio 685: Comprobar si al menos uno de 2 números es igual 10, o suma o diferencia a igual a 10.

function igualesA10(a, b) {
    if (a == 10 || b == 10) {
        return true;
    }

    if (a + b == 10) {
        return true;
    }

    if (Math.abs(a - b) == 10) {
        return true;
    }

    return false;
}

console.log(igualesA10(5, 3));  // false
console.log(igualesA10(5, 5));  // true
console.log(igualesA10(10, 5));  // true
console.log(igualesA10(5, 10));  // true
console.log(igualesA10(20, 30));  // true
console.log(igualesA10(30, 20));  // true
