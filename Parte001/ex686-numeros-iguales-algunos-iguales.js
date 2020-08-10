// Ejercicio 686: Retornar 100 si 3 números son iguales, si al menos dos son iguales, 50; en caso contrario 25.

function validarTresNumeros(a, b, c) {
    if (a == b && a == c) {
        return 100;
    } else if (a == b || a == c || b == c) {
        return 50;
    } else {
        return 25;
    }
}

console.log(validarTresNumeros(1, 2, 3));   // 25
console.log(validarTresNumeros(1, 2, 2));   // 50
console.log(validarTresNumeros(1, 1, 1));   // 100
