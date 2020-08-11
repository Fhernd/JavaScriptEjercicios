// Ejercicio 690: Validar si cualquiera de dos números es igual a 10, o si suma o diferencia es igual a 10.

function validarNumeros(a, b) {
    return (a == 10 || b == 10 || a + b == 10 || Math.abs(a - b) == 10);
}

console.log(validarNumeros(0, 0));  // false
console.log(validarNumeros(-10, 0));  // true
console.log(validarNumeros(0, -10));  // true
console.log(validarNumeros(10, 0));  // true
console.log(validarNumeros(0, 10));  // true
console.log(validarNumeros(8, 2));  // true
console.log(validarNumeros(110, 120));  // true
