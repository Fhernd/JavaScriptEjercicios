// Ejercicio 666: Comprobar si un número entero se halla entre 20 unidades de 100, y 500.

// x, abs(x - 100) <= 20
// x, abs(x - 500) <= 20

function validarNumero(x) {
    return (Math.abs(x - 100) <= 20) || (Math.abs(x - 500) <= 20);
}

console.log(validarNumero(50)); // false
console.log(validarNumero(80)); // true
console.log(validarNumero(150)); // false
console.log(validarNumero(490)); // true
console.log(validarNumero(510)); // true
