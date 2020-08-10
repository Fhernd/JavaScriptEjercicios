// Ejercicio 689: Comprobar si al menos un número es menor a 50, y menor a otros dos números.

function validarNumeros(a, b, c) {
    return (a < 50 && a < b && a < c) || (b < 50 && b < a && b < c) || (c < 50 && c < a && c < b);
}

console.log(validarNumeros(10, 50, 100));   // true
console.log(validarNumeros(100, 50, 100));   // false
console.log(validarNumeros(100, 5, 100));   // true
console.log(validarNumeros(100, 5, -1));   // true
